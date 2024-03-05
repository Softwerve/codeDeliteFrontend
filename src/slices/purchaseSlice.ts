import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface purchaseState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  success: boolean;
  purchasedBag: [
    {
      itemId: number;
      itemTitle: string;
      thumbnailImage: string;
      itemOverview: string;
      itemDownloadLink: string;
      authorName: string;
      authorProfileImage: string;
      authorUsername: string;
      razorpayPaymentId: string;
      purchaseId: number;
      purchaseTime: string;
      purchaseAmount: number;
      allowedThankYouButton: boolean;
      supportAmount: number;
      feedback: string;
    }
  ];
}

// Define the initial state using that type
const initialState: purchaseState = {
  isLoading: false,
  isError: false,
  message: "",
  success: false,
  purchasedBag: [
    {
      itemId: 0,
      itemTitle: "",
      thumbnailImage: "",
      itemOverview: "",
      itemDownloadLink: "",
      authorName: "",
      authorProfileImage: "",
      authorUsername: "",
      razorpayPaymentId: "",
      purchaseId: 0,
      purchaseTime: "",
      purchaseAmount: 0,
      allowedThankYouButton: false,
      supportAmount: 0,
      feedback: "",
    }
  ]
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    purchaseFreeItemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    purchaseFreeItemSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = true;
    },
    purchaseFreeItemFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    getPurchasedBagStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getPurchasedBagSuccess: (state, action) => {
      state.isLoading = false;
      state.purchasedBag = action.payload;
    },
    getPurchasedBagFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    giveFeedbackToPurchasedItemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    giveFeedbackToPurchasedItemSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
    giveFeedbackToPurchasedItemFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const {
  purchaseFreeItemStart,
  purchaseFreeItemSuccess,
  purchaseFreeItemFailure,
  getPurchasedBagStart,
  getPurchasedBagSuccess,
  getPurchasedBagFailure,
  giveFeedbackToPurchasedItemStart,
  giveFeedbackToPurchasedItemSuccess,
  giveFeedbackToPurchasedItemFailure
} = purchaseSlice.actions;

export default purchaseSlice.reducer;
