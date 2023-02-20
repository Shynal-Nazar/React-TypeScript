import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  filter: string;
};

const initialState: FilterState = {
  filter: "",
};

export const FilterSplice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleChangeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { handleChangeFilter } = FilterSplice.actions;
