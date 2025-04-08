import { Button, Text, View } from "react-native";
import counterStore from "../stores/counter.store";
import userCounterStore from "../stores/counter2.store";

const CounterScreen = () => {
  const { count, increment, decrement } = userCounterStore();

  return (
    <View>
      <Text>Counter</Text>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => increment()} />
      <Button title="Decrement" onPress={() => decrement()} />
    </View>
  );
};

export default CounterScreen;
