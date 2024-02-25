import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface authState {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  user: {}
}

// Define the initial state using that type
const initialState: authState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  message: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLogin = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure } =
  authSlice.actions;

export default authSlice.reducer;
