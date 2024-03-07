import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface authorState {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  authorsCards: [
    {
        authorId: number;
        name: string;
        username: string;
        profileImage: string;
        profileTitle: string;
        monetizationLevel: string;
        totalFollowers: number;
        totalCreation: number;
        followed: boolean;
        isInInspirationList: boolean;
    }
  ],
}

// Define the initial state using that type
const initialState: authorState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  message: "",
  authorsCards: [
    {
        authorId: 0,
        name: "",
        username: "",
        profileImage: "",
        profileTitle: "",
        monetizationLevel: "",
        totalFollowers: 0,
        totalCreation: 0,
        followed: false, 
        isInInspirationList: false,
    }
  ],
};

export const authorsSlice = createSlice({
  name: "authors",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    authorsFollowCardsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    authorsFollowCardsSuccess: (state, action) => {
      state.isLoading = false;
      state.authorsCards = action.payload;
      state.isLogin = true;
    },
    authorsFollowCardsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { authorsFollowCardsStart,authorsFollowCardsSuccess,authorsFollowCardsFailure } =
  authorsSlice.actions;

export default authorsSlice.reducer;
