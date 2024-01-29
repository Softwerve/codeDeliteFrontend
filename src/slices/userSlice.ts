import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface userState {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  user: {}
}

// Define the initial state using that type
const initialState: userState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  message: "",
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userDetailsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    userDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLogin = true;
    },
    userDetailsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { userDetailsStart,userDetailsSuccess,userDetailsFailure } =
  userSlice.actions;

export default userSlice.reducer;
