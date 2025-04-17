import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react"; //hook
import CustomButton from "../components/CustomButton";
import PlanetCard from "../components/PlanetCard";
import { useQuery } from "@tanstack/react-query";

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

const getPlanets = async (page: number) => {
  const response = await fetch(
    `https://www.swapi.tech/api/planets?page=${page}&limit=10`
  );
  const data = await response.json();
  return data;
};

export default function PlanetLisQuery() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        {error && <Text>Error: {error.message}</Text>}
        {data && (
          <>
            <Text>Planets</Text>
            {data.results.map((planet) => (
              <View key={planet.name}>
                <Text>{planet.name}</Text>
              </View>
            ))}
          </>
        )}

        <CustomButton
          title="Previous Page"
          onPress={() => {
            setPage(page - 1);
          }}
        />

        <CustomButton
          title="Next Page"
          onPress={() => {
            setPage(page + 1);
          }}
        />

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
