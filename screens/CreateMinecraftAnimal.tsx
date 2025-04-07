import { View, Text, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import CustomTextInput from "../components/inputs/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MinecraftAnimalFormSchema,
  MinecraftAnimalForm,
} from "../schemas/minecraft.schema";

const CreateMinecraftAnimal = () => {
  const { control, handleSubmit } = useForm<MinecraftAnimalForm>({
    resolver: zodResolver(MinecraftAnimalFormSchema),
  });

  const onSubmit = async (data: MinecraftAnimalForm) => {
    //https://crudcrud.com/api/c5e35222b2b949258555b33e4143b7ab
    const response = await fetch(
      "https://crudcrud.com/api/c5e35222b2b949258555b33e4143b7ab/animals",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json);
  };

  return (
    <View style={styles.container}>
      <Text>Create Minecraft Animal</Text>
      <CustomTextInput control={control} name="name" placeholder="Name" />
      <CustomTextInput control={control} name="type" placeholder="Type" />
      <CustomTextInput control={control} name="color" placeholder="Color" />
      <CustomTextInput control={control} name="size" placeholder="Size" />
      <Button title="Create" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateMinecraftAnimal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
