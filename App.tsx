import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react"; //hook

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
};

type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export default function App() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Planets</Text>
      {planets.map((planet) => (
        <Text key={planet.name}>{planet.name}</Text>
      ))}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button
          title="prev"
          onPress={() => {
            console.log("prev");
          }}
        />
        <Button
          title="next"
          onPress={() => {
            console.log("next");
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
