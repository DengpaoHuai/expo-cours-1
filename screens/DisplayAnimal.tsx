import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../router";

const DisplayAnimal = () => {
  const route = useRoute<RouteProp<RootStackParamList, "DisplayAnimal">>();

  const { animal } = route.params;

  return (
    <View>
      <Text>DisplayAnimal</Text>
      <Text>{animal.name}</Text>
      <Text>{animal.type}</Text>
      <Text>{animal.color}</Text>
      <Text>{animal.size}</Text>
    </View>
  );
};

export default DisplayAnimal;
