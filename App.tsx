import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react"; //hook
import CustomButton from "./components/CustomButton";
import PlanetCard from "./components/PlanetCard";

export type Planet = {
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
  const [planetsResponse, setPlanetsResponse] = useState<PlanetsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setPlanetsResponse(data);
  };

  useEffect(() => {
    getData("https://swapi.dev/api/planets");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Planets</Text>
      <Text>{planetsResponse.count}</Text>
      {planetsResponse.results.map((planet) => (
        <PlanetCard key={planet.name} planet={planet}>
          <Text>Hello</Text>
        </PlanetCard>
      ))}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton
          title="prev"
          disabled={!planetsResponse.previous}
          onPress={() => getData(planetsResponse.previous!)}
        />
        <Button
          title="next"
          disabled={!planetsResponse.next}
          onPress={() => planetsResponse.next && getData(planetsResponse.next)}
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
