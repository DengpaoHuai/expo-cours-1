import { Button, StyleSheet } from "react-native";

const CustomButton = () => {
  return (
    <Button
      title="Click me"
      color={styles.button.backgroundColor}
      onPress={() => alert("Button pressed")}
    />
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
  },
});
