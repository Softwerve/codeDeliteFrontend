import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface orderState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  success: boolean;
  allOrdersResponse: [{
    orderId: number;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    orderCreationTime: string;
    orderPaidTime: string;
    orderStatus: string;
    authorId: number;
    authorName: string;
    authorUsername: string;
    authorProfileImage: string;
    authorMonetizationLevel: string;
    items: [
      {
        itemId: number;
        title: string;
        thumbnailImage: string;
        overview: string;
        itemAmount: number;
      }
    ];
    amount: number;
  }];
  allPaidOrdersResponse: [{
    orderId: number;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    orderCreationTime: string;
    orderPaidTime: string;
    orderStatus: string;
    authorId: number;
    authorName: string;
    authorUsername: string;
    authorProfileImage: string;
    authorMonetizationLevel: string;
    items: [
      {
        itemId: number;
        title: string;
        thumbnailImage: string;
        overview: string;
        itemAmount: number;
      }
    ];
    amount: number;
  }];
  allPendingOrdersResponse: [{
    orderId: number;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    orderCreationTime: string;
    orderPaidTime: string;
    orderStatus: string;
    authorId: number;
    authorName: string;
    authorUsername: string;
    authorProfileImage: string;
    authorMonetizationLevel: string;
    items: [
      {
        itemId: number;
        title: string;
        thumbnailImage: string;
        overview: string;
        itemAmount: number;
      }
    ];
    amount: number;
  }];
}

// Define the initial state using that type
const initialState: orderState = {
  isLoading: false,
  isError: false,
  message: "",
  success: false,
  allOrdersResponse: [{
    orderId: 0,
    razorpayOrderId: "",
    razorpayPaymentId: "",
    orderCreationTime: "",
    orderPaidTime: "",
    orderStatus: "",
    authorId: 0,
    authorName: "",
    authorUsername: "",
    authorProfileImage: "",
    authorMonetizationLevel: "",
    items: [
      {
        itemId: 0,
        title: "",
        thumbnailImage: "",
        overview: "",
        itemAmount: 0,
      },
    ],
    amount: 0,
  }],
  allPaidOrdersResponse: [{
    orderId: 0,
    razorpayOrderId: "",
    razorpayPaymentId: "",
    orderCreationTime: "",
    orderPaidTime: "",
    orderStatus: "",
    authorId: 0,
    authorName: "",
    authorUsername: "",
    authorProfileImage: "",
    authorMonetizationLevel: "",
    items: [
      {
        itemId: 0,
        title: "",
        thumbnailImage: "",
        overview: "",
        itemAmount: 0,
      },
    ],
    amount: 0,
  }],
  allPendingOrdersResponse: [{
    orderId: 0,
    razorpayOrderId: "",
    razorpayPaymentId: "",
    orderCreationTime: "",
    orderPaidTime: "",
    orderStatus: "",
    authorId: 0,
    authorName: "",
    authorUsername: "",
    authorProfileImage: "",
    authorMonetizationLevel: "",
    items: [
      {
        itemId: 0,
        title: "",
        thumbnailImage: "",
        overview: "",
        itemAmount: 0,
      },
    ],
    amount: 0,
  }],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getAllOrdersStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllOrdersSuccess: (state, action) => {
      state.isLoading = false;
      state.allOrdersResponse = action.payload;
    },
    getAllOrdersFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    getAllPaidOrdersStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllPaidOrdersSuccess: (state, action) => {
      state.isLoading = false;
      state.allPaidOrdersResponse = action.payload;
    },
    getAllPaidOrdersFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    getAllPendingOrdersStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getAllPendingOrdersSuccess: (state, action) => {
      state.isLoading = false;
      state.allPendingOrdersResponse = action.payload;
    },
    getAllPendingOrdersFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const {
  getAllOrdersStart,
  getAllOrdersSuccess,
  getAllOrdersFailure,
  getAllPaidOrdersStart,
  getAllPaidOrdersSuccess,
  getAllPaidOrdersFailure,
  getAllPendingOrdersStart,
  getAllPendingOrdersSuccess,
  getAllPendingOrdersFailure,
} = ordersSlice.actions;

export default ordersSlice.reducer;
