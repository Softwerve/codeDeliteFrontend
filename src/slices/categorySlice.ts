import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface CategoriesState {
  categories: [];
  isLoading: boolean;
  isError: boolean;
  message: string;
}

// Define the initial state using that type
const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const categorySlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllCategoriesStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllCategoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    getAllCategoriesFailure: (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { getAllCategoriesStart, getAllCategoriesSuccess, getAllCategoriesFailure } =
  categorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sendOtp.value;

export default categorySlice.reducer;
