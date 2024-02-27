import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface authState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  templates: [
    {
      authorUsername: string;
      monetizationLevel: string;
      tempId: number;
      authorId: number;
      authorName: string;
      authorProfileImage: string;
      title: string;
      thumbnailImage: string;
      price: number;
      likes: number;
      isFollowingAuthor: boolean;
      isAuthorInInspirationList: boolean;
      isItemInBag: boolean;
      isItemInLovedlist: boolean;
      isLiked: boolean;
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
  isLoading: false,
  isError: false,
  message: "",
  templates: [
    {
      tempId: 0,
      authorId: 0,
      authorName: "",
      authorUsername: "",
      monetizationLevel: "",
      authorProfileImage: "",
      title: "",
      thumbnailImage: "",
      price: 0.0,
      likes: 0,
      isFollowingAuthor: false,
      isAuthorInInspirationList: false,
      isItemInBag: false,
      isItemInLovedlist: false,
      isLiked: false,
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
    },
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
    },
    likeItemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    likeItemSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    likeItemFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    unlikeItemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    unlikeItemSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    unlikeItemFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    
  },
});

export const {
  templatesByCategoryStart,
  templatesByCategorySuccess,
  templatesByCategoryFailure,
  likeItemStart,
  likeItemSuccess,
  likeItemFailure,
  unlikeItemStart,
  unlikeItemSuccess,
  unlikeItemFailure,
} = loggedInSlice.actions;

export default loggedInSlice.reducer;
