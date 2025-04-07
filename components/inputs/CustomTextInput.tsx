import { Control, Controller, FieldErrors } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

type CustomTextInputProps = {
  control: Control<any>;
  name: string;
  placeholder: string;
};

const CustomTextInput = ({
  control,
  name,
  placeholder,
}: CustomTextInputProps) => {
  return (
    <>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && (
              <Text style={styles.errorText}>{error?.message! as string}</Text>
            )}
          </>
        )}
        name={name}
      />
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
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
