import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface purchaseState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  success: boolean;
}

// Define the initial state using that type
const initialState: purchaseState = {
  isLoading: false,
  isError: false,
  message: "",
  success: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    purchaseFreeItemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    purchaseFreeItemSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = true;
    },
    purchaseFreeItemFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { purchaseFreeItemStart,purchaseFreeItemSuccess,purchaseFreeItemFailure } =
  paymentSlice.actions;

export default paymentSlice.reducer;
