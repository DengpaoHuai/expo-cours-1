import { create } from "zustand";

type UserCounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const userCounterStore = create<UserCounterStore>((set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      console.log(state);
      return {
        count: state.count + 1,
      };
    }),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default userCounterStore;
