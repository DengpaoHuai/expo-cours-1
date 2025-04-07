import { Button, ButtonProps, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, disabled }: ButtonProps) => {
  return (
    <Button
      title={title}
      color={styles.button.backgroundColor}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
  },
});
