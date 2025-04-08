import { createContext, useState } from "react";

export const CounterStoreContext = createContext({
  count: 0,
  increment: () => {},
});

export const CounterStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterStoreContext.Provider value={{ count, increment }}>
      {children}
    </CounterStoreContext.Provider>
  );
};
