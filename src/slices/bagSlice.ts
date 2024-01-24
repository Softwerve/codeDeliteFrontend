import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface bagState {
  isSuccess: false;
  isLoading: boolean;
  isError: boolean;
  message: string;
}

// Define the initial state using that type
const initialState: bagState = {
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
};

export const bagSlice = createSlice({
  name: "bag",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemToBagStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    addItemToBagSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    },
    addItemToBagFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload.message;
    },
  },
});

export const { addItemToBagStart, addItemToBagSuccess, addItemToBagFailure } =
  bagSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sendOtp.value;

export default bagSlice.reducer;
