import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface TemplatesState {
  templates: [];
  isLoading: boolean;
  isError: boolean;
  message: string;
}

// Define the initial state using that type
const initialState: TemplatesState = {
  templates: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const templateSlice = createSlice({
  name: "templates",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllPublishedTemplatesStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllPublishedTemplatesSuccess: (state, action) => {
      state.isLoading = false;
      state.templates = action.payload;
    },
    getAllPublishedTemplatesFailure: (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const { getAllPublishedTemplatesStart,getAllPublishedTemplatesSuccess,getAllPublishedTemplatesFailure } =
  templateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sendOtp.value;

export default templateSlice.reducer;
