import { Fragment, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { MinecraftAnimalForm } from "../schemas/minecraft.schema";
import useCustomNavigation from "../hooks/useCustomNavigation";
import useFetch from "../hooks/useFetch";

const ListAnimals = () => {
  const navigation = useCustomNavigation();
  const {
    data: animals,
    loading,
    error,
  } = useFetch<MinecraftAnimalForm[]>(
    "https://crudcrud.com/api/c5e35222b2b949258555b33e4143b7ab/animals"
  );

  return (
    <View>
      <Text>ListAnimals</Text>
      <Button
        title="Go to Create Minecraft Animal"
        onPress={() => navigation.navigate("CreateMinecraftAnimal")}
      />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {animals?.map((animal) => (
        <Fragment key={animal._id}>
          <Text>{animal.name}</Text>
          <Button
            title="Display Animal"
            onPress={() =>
              navigation.navigate("DisplayAnimal", { animal: animal })
            }
          />
        </Fragment>
      ))}
    </View>
  );
};

export default ListAnimals;
