import { RootState } from "../store";

export const getComponents = (state: RootState) => state.components.components;
export const getSearchValue = (state: RootState) =>
  state.components.searchValue;
