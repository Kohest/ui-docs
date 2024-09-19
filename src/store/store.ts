import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import componentsSlice from "./components/slice";
export const store = configureStore({
  reducer: {
    components: componentsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
