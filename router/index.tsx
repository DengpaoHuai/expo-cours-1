import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlanetsScreen from "../screens/PlanetList";
import CreateMinecraftAnimal from "../screens/CreateMinecraftAnimal";
import ListAnimals from "../screens/ListAnimals";
import DisplayAnimal from "../screens/DisplayAnimal";
import { MinecraftAnimalForm } from "../schemas/minecraft.schema";
import CounterScreen from "../screens/CounterScreen";

export type RootStackParamList = {
  Home: undefined;
  Planets: undefined;
  ListAnimals: undefined;
  DisplayAnimal: { animal: MinecraftAnimalForm };
  CreateMinecraftAnimal: undefined;
  Counter: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planets" component={PlanetsScreen} />
        <Stack.Screen
          name="CreateMinecraftAnimal"
          component={CreateMinecraftAnimal}
        />
        <Stack.Screen name="ListAnimals" component={ListAnimals} />
        <Stack.Screen name="DisplayAnimal" component={DisplayAnimal} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
