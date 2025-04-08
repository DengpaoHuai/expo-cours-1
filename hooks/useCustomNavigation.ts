import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../router";

const useCustomNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return navigation;
};

export default useCustomNavigation;
