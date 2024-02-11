import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface userState {
  isLogin: boolean;
  isLoading: boolean;
  isOtpLoading: boolean;
  isError: boolean;
  message: string;
  otpSuccess: boolean;
  isRegister: boolean;
  isAvailable: boolean;
  user: {
    username: string;
    name: string;
    email: string;
    profileImage: string;
    country: string;
    currency: string;
    currencySymbol: string;
    role: string;
  },
}

// Define the initial state using that type
const initialState: userState = {
  isLogin: false,
  isOtpLoading: false,
  isLoading: false,
  isError: false,
  message: "",
  user: {
    username: "",
    name: "",
    email: "",
    profileImage: "",
    country: "",
    currency: "",
    currencySymbol: "",
    role: "",
  },
  otpSuccess: false,
  isRegister: false,
  isAvailable: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sendOtpStart: (state) => {
      state.isOtpLoading= true;
      state.isError = false;
    },
    sendOtpSuccess: (state,action) => {
      state.isOtpLoading = false;
      state.otpSuccess = action.payload.success;
      state.message = action.payload.message;
    },
    sendOtpFailure: (state,action) => {
      state.isOtpLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    availableUsernameStart: (state) => {
      state.isLoading= true;
      state.isError = false;
    },
    availableUsernameSuccess: (state,action) => {
      state.isLoading = false;
      state.isAvailable = action.payload.success;
      state.message = action.payload.message;
    },
    availableUsernameFailure: (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    signupStart: (state) => {
      state.isLoading= true;
      state.isError = false;
    },
    signupSuccess: (state,action) => {
      state.isLoading = false;
      state.isRegister = action.payload.success;
      state.message = action.payload.message;
    },
    signupFailure: (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
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
    },
  },
});

export const { sendOtpStart, sendOtpSuccess, sendOtpFailure,availableUsernameStart,availableUsernameSuccess,availableUsernameFailure,signupStart,signupSuccess, signupFailure, userDetailsStart,userDetailsSuccess,userDetailsFailure } =
  userSlice.actions;

export default userSlice.reducer;
