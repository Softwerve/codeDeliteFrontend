import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface followState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  success : boolean;
  followedAuthors: [
    {
      authorId: number;
      profileImage: string;
      name: string;
      username: string;
    }
  ];
  authorPublishedWebsites: [
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
      category: string;
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
  authorPublishedComponents: [
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
      category: string;
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
const initialState: followState = {
  isLoading: false,
  isError: false,
  message: "",
  success: false,
  followedAuthors: [
    {
      authorId: 0,
      profileImage: "",
      name: "",
      username: "",
    },
  ],
  authorPublishedWebsites: [
    {
      tempId: 0,
      authorId: 0,
      authorName: "",
      authorProfileImage: "",
      title: "",
      thumbnailImage: "",
      price: 0.0,
      likes: 0,
      currency: "",
      tempLink: "",
      tempType: "",
      category: "",
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
  authorPublishedComponents: [
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
      category: "",
      status: "",
      currency: "",
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

export const followSlice = createSlice({
  name: "follow",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllFollowedAuthorsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllFollowedAuthorsSuccess: (state, action) => {
      state.isLoading = false;
      state.followedAuthors = action.payload;
    },
    getAllFollowedAuthorsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    followAuthorStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    followAuthorSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = true;
    },
    followAuthorFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    inspireByAuthorStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    inspireByAuthorSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = true;
    },
    inspireByAuthorFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    authorPublishedWebsitesStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    authorPublishedWebsitesSuccess: (state, action) => {
      state.isLoading = false;
      state.authorPublishedWebsites = action.payload;
    },
    authorPublishedWebsitesFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    authorPublishedComponentsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    authorPublishedComponentsSuccess: (state, action) => {
      state.isLoading = false;
      state.authorPublishedComponents = action.payload;
    },
    authorPublishedComponentsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const {
  getAllFollowedAuthorsStart,
  getAllFollowedAuthorsSuccess,
  getAllFollowedAuthorsFailure,
  followAuthorStart,
  followAuthorSuccess,
  followAuthorFailure,
  inspireByAuthorStart,
  inspireByAuthorSuccess,
  inspireByAuthorFailure,
  authorPublishedWebsitesStart,
  authorPublishedWebsitesSuccess,
  authorPublishedWebsitesFailure,
  authorPublishedComponentsStart,
  authorPublishedComponentsSuccess,
  authorPublishedComponentsFailure,
} = followSlice.actions;

export default followSlice.reducer;
