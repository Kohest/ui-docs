import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { componentsLinks } from "../../constants/asideLinks";
import { ComponentsState } from "./types";

const initialState: ComponentsState = {
  searchValue: "",
  components: [],
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    findComponents: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      if (action.payload === "") {
        state.components = [];
      } else {
        state.components = componentsLinks.filter((component) =>
          component.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
});

export const { findComponents } = componentsSlice.actions;
export default componentsSlice.reducer;
