import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface authState {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  templates: [
    {
      tempId: number;
      authorId: number;
      authorName: string;
      authorProfileImage: string;
      title: string;
      thumbnailImage: string;
      price: number;
      likes: number;
      itemInLovedlist: boolean;
      liked: boolean;
      itemInBag: boolean;
      followingAuthor: boolean;
      tempLink: string;
      tempType: string;
      currency: string;
      status: string;
      authorProfileLink: string;
      templatePage: {
        images: [];
        highlights: [];
        overview: string;
        sections: [];
        technologiesUsed: [];
      };
    }
  ];
}

// Define the initial state using that type
const initialState: authState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  message: "",
  templates: [
    {
      tempId: 0,
      authorId: 0,
      authorName: "",
      authorProfileImage: "",
      title: "",
      thumbnailImage: "",
      price: 0.0,
      likes: 0,
      itemInLovedlist: false,
      liked: false,
      itemInBag: false,
      followingAuthor: false,
      tempLink: "",
      tempType: "",
      currency: "",
      status: "",
      authorProfileLink: "",
      templatePage: {
        images: [],
        highlights: [],
        overview: "",
        sections: [],
        technologiesUsed: [],
      },
    }
  ],
};

export const loggedInSlice = createSlice({
  name: "loggedin",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    templatesByCategoryStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    templatesByCategorySuccess: (state, action) => {
      state.isLoading = false;
      state.templates = action.payload;
    },
    templatesByCategoryFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    }
  },
});

export const { templatesByCategoryStart,templatesByCategorySuccess,templatesByCategoryFailure  } =
  loggedInSlice.actions;

export default loggedInSlice.reducer;
