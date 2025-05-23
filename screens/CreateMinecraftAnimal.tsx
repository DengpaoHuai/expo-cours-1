import { View, Text, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import CustomTextInput from "../components/inputs/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MinecraftAnimalFormSchema,
  MinecraftAnimalForm,
} from "../schemas/minecraft.schema";
import { useNavigation } from "@react-navigation/native";

const CreateMinecraftAnimal = () => {
  const { control, handleSubmit } = useForm<Omit<MinecraftAnimalForm, "_id">>({
    resolver: zodResolver(MinecraftAnimalFormSchema),
  });
  const navigation = useNavigation();

  console.log(navigation.getState());

  const onSubmit = async (data: Omit<MinecraftAnimalForm, "_id">) => {
    //https://crudcrud.com/api/c5e35222b2b949258555b33e4143b7ab
    const response = await fetch(
      "https://crudcrud.com/api/acd9d88f28a14a9baa404044703009a4/animals",
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
    navigation.goBack();
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
