import { Button, Text, View } from "react-native";
import { useContext } from "react";
import { CounterStoreContext } from "../contexts/CounterStoreContext";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

const CounterScreen = inject("CounterStore")(
  observer(({ CounterStore }) => {
    console.log(CounterStore.count);
    return (
      <View>
        <Text>Counter</Text>
        <Text>{CounterStore.count}</Text>
        <Button title="Increment" onPress={() => CounterStore.increment()} />
        <Button title="Decrement" onPress={() => CounterStore.decrement()} />
      </View>
    );
  })
);

export default CounterScreen;
