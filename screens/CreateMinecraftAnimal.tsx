import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  name: string;
  type: string;
  color: string;
  size: string;
};

const CreateMinecraftAnimal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      type: "",
      color: "",
      size: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text>Create Minecraft Animal</Text>

      <Controller
        control={control}
        rules={{ required: "Le nom est requis" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        rules={{ required: "Le type est requis" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Type"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="type"
      />
      {errors.type && (
        <Text style={styles.errorText}>{errors.type.message}</Text>
      )}

      <Controller
        control={control}
        rules={{ required: "La couleur est requise" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Color"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="color"
      />
      {errors.color && (
        <Text style={styles.errorText}>{errors.color.message}</Text>
      )}

      <Controller
        control={control}
        rules={{ required: "La taille est requise" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Size"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="size"
      />
      {errors.size && (
        <Text style={styles.errorText}>{errors.size.message}</Text>
      )}

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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  errorText: {
    color: "red",
    marginLeft: 10,
    marginTop: -5,
  },
});
