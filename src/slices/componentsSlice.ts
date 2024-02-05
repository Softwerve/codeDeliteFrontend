import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface componentState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  components: [
    {
      tempId: number;
      authorId: number;
      authorName: string;
      username: string;
      authorProfileImage: string;
      monetizationLevel: string;
      title: string;
      thumbnailImage: string;
      price: number;
      likes: number;
      tempLink: string;
      category: string;
      authorProfileLink: string;
    }
  ];
}

// Define the initial state using that type
const initialState: componentState = {
  isLoading: false,
  isError: false,
  message: "",
  components: [
    {
      tempId: 0,
      authorId: 0,
      authorName: "",
      username: "",
      authorProfileImage: "",
      monetizationLevel: "",
      title: "",
      thumbnailImage: "",
      price: 0,
      likes: 0,
      tempLink: "",
      category: "",
      authorProfileLink: "",
    }
  ],
};

export const componentSlice = createSlice({
  name: "components",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    componentsOfACategoryStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    componentsOfACategorySuccess: (state, action) => {
      state.isLoading = false;
      state.components = action.payload;
    },
    componentsOfACategoryFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const {componentsOfACategoryStart,componentsOfACategorySuccess,componentsOfACategoryFailure} = componentSlice.actions;

export default componentSlice.reducer;
