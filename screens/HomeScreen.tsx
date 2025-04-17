import { View, Text, Button } from "react-native";
import useCustomNavigation from "../hooks/useCustomNavigation";
import userCounterStore from "../stores/counter2.store";
import { useContext } from "react";
import { CounterStoreContext } from "../contexts/CounterStoreContext";

const HomeScreen = () => {
  const navigation = useCustomNavigation();
  const { count, increment } = useContext(CounterStoreContext);

  return (
    <View>
      <Text>Home {count}</Text>
      <Button
        title="Go to Planets"
        onPress={() => navigation.navigate("Planets")}
      />
      <Button
        title="Go to List Animals"
        onPress={() => navigation.navigate("ListAnimals")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to PlanetLisQuery"
        onPress={() => navigation.navigate("PlanetLisQuery")}
      />
    </View>
  );
};

export default HomeScreen;
