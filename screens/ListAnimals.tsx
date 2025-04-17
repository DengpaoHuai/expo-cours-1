import { Fragment, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { MinecraftAnimalForm } from "../schemas/minecraft.schema";
import useCustomNavigation from "../hooks/useCustomNavigation";
import useFetch from "../hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAnimals = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/acd9d88f28a14a9baa404044703009a4/animals"
  );
  const data = await response.json();
  return data;
};

const deleteAnimal = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("Error deleting animal");
  const response = await fetch(
    `https://crudcrud.com/api/acd9d88f28a14a9baa404044703009a4/animals/${id}`,
    { method: "DELETE" }
  );
  return true;
};

const ListAnimals = () => {
  const queryClient = useQueryClient();

  const navigation = useCustomNavigation();
  const {
    data: animals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });

  const { mutate: deleteAnimalMutation } = useMutation({
    mutationFn: deleteAnimal,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["animals"] });
      const previousAnimals = queryClient.getQueryData<MinecraftAnimalForm[]>([
        "animals",
      ]);
      queryClient.setQueryData(["animals"], (old: MinecraftAnimalForm[]) => {
        console.log("old", old);
        return old.filter((animal) => animal._id !== id);
      });
      return { previousAnimals };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(["animals"], context?.previousAnimals);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });

  return (
    <View>
      <Text>ListAnimals</Text>
      <Button
        title="Go to Create Minecraft Animal"
        onPress={() => navigation.navigate("CreateMinecraftAnimal")}
      />
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {animals?.map((animal: MinecraftAnimalForm) => (
        <Fragment key={animal._id}>
          <Text>{animal.name}</Text>
          <Button
            title="Display Animal"
            onPress={() =>
              navigation.navigate("DisplayAnimal", { animal: animal })
            }
          />
          <Button
            title="Delete Animal"
            onPress={() => deleteAnimalMutation(animal._id)}
          />
        </Fragment>
      ))}
    </View>
  );
};

export default ListAnimals;
