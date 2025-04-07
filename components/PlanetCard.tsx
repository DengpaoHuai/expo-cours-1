import { View, Text, StyleSheet } from "react-native";
import { Planet } from "../App";

type PlanetCardProps = {
  planet: Planet;
  children: React.ReactNode;
};

const PlanetCard = ({ planet, children }: PlanetCardProps) => {
  return (
    <>
      {children}
      <View style={styles.container}>
        <Text>{planet.name}</Text>
      </View>
    </>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
