import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlanetsScreen from "../screens/PlanetList";
import CreateMinecraftAnimal from "../screens/CreateMinecraftAnimal";
const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
