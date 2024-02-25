import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../lib/store";

// Define a type for the slice state
interface TemplatesState {
  templates: [
    {
      username: string;
      tempId: number;
      authorId: number;
      authorName: string;
      authorProfileImage: string;
      title: string;
      thumbnailImage: string;
      price: number;
      likes: number;
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
  isLoading: boolean;
  isError: boolean;
  message: string;
  lovedItems: [
    {
      tempId: number;
      authorId: number;
      authorName: string;
      authorProfileImage: string;
      title: string;
      thumbnailImage: string;
      price: number;
      likes: number;
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
  isSuccess: boolean;
}

// Define the initial state using that type
const initialState: TemplatesState = {
  templates: [
    {
      username: "",
      tempId: 0,
      authorId: 0,
      authorName: "",
      authorProfileImage: "",
      title: "",
      thumbnailImage: "",
      price: 0.0,
      likes: 0,
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
  lovedItems: [
    {
      tempId: 0,
      authorId: 0,
      authorName: "",
      authorProfileImage: "",
      title: "",
      thumbnailImage: "",
      price: 0.0,
      likes: 0,
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
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
};

export const templateSlice = createSlice({
  name: "templates",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllPublishedTemplatesOfACategoryStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllPublishedTemplatesOfACategorySuccess: (state, action) => {
      state.isLoading = false;
      state.templates = action.payload;
    },
    getAllPublishedTemplatesOfACategoryFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    addItemToLovedListStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    addItemToLovedListSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.isSuccess = action.payload.isSuccess;
    },
    addItemToLovedListFailure: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    getAllLovedTemplatesStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllLovedTemplatesSuccess: (state, action) => {
      state.isLoading = false;
      state.lovedItems = action.payload;
    },
    getAllLovedTemplatesFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    removeItemFromLovedListStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    removeItemFromLovedListSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.isSuccess = action.payload.isSuccess;
    },
    removeItemFromLovedListFailure: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  getAllPublishedTemplatesOfACategoryStart,
  getAllPublishedTemplatesOfACategorySuccess,
  getAllPublishedTemplatesOfACategoryFailure,
  addItemToLovedListStart,
  addItemToLovedListSuccess,
  addItemToLovedListFailure,
  getAllLovedTemplatesStart,
  getAllLovedTemplatesSuccess,
  getAllLovedTemplatesFailure,
  removeItemFromLovedListStart,
  removeItemFromLovedListSuccess,
  removeItemFromLovedListFailure,
} = templateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sendOtp.value;

export default templateSlice.reducer;
