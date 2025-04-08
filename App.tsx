import { Provider } from "mobx-react";
import { CounterStoreProvider } from "./contexts/CounterStoreContext";
import AppRouter from "./router";
import CounterStore from "./stores/counter.store";

export default function App() {
  return (
    <Provider CounterStore={CounterStore}>
      <CounterStoreProvider>
        <AppRouter />
      </CounterStoreProvider>
    </Provider>
  );
}
