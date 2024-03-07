import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface bagState {
  isSuccess: false;
  isLoading: boolean;
  isError: boolean;
  message: string;
  bagAccordingToAuthor: [{
    authorId : number;
    authorName: string;
    authorUsername: string;
    authorProfileImage: string;
    bagItems: [
      {
        tempId : number;
        title: string;
        thumbnailImage: string;
        price: number;
        tempLink: string;
        tempType: string;
      }
    ];
    totalPrice: number;
  }]
}

// Define the initial state using that type
const initialState: bagState = {
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
  bagAccordingToAuthor: [{
    authorId : 0,
    authorName: "",
    authorUsername: "",
    authorProfileImage: "",
    bagItems: [
      {
        tempId : 0,
        title: "",
        thumbnailImage: "",
        price: 0,
        tempLink: "",
        tempType: "",
      }
    ],
    totalPrice: 0,
  }]
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
    getUserBagStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getUserBagSuccess: (state,action) => {
      state.isLoading = false;
      state.bagAccordingToAuthor = action.payload;
    },
    getUserBagFailure: (state,action)=>{
      state.isLoading = false;
      state.isError = true;
    },
    removeItemFromBagStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    removeItemFromBagSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    },
    removeItemFromBagFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload.message;
    },
  },
});

export const { addItemToBagStart, addItemToBagSuccess, addItemToBagFailure, getUserBagStart, getUserBagSuccess, getUserBagFailure, removeItemFromBagStart,removeItemFromBagSuccess,removeItemFromBagFailure } =
  bagSlice.actions;

export default bagSlice.reducer;
