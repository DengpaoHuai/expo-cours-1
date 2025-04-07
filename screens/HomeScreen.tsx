import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Planets"
        onPress={() => navigation.navigate("Planets")}
      />
      <Button
        title="Go to Create Minecraft Animal"
        onPress={() => navigation.navigate("CreateMinecraftAnimal")}
      />
    </View>
  );
};

export default HomeScreen;
