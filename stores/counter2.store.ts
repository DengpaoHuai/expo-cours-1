import { create } from "zustand";
//periosts
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserCounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const userCounterStore = create<UserCounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () =>
        set((state) => {
          console.log(state);
          return {
            count: state.count + 1,
          };
        }),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "user-counter",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default userCounterStore;
