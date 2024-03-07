import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface paymentState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  success: boolean;
  orderResponse: {
    amount : number;
    name : string;
    description : string;
    orderId: string;
    prefill : {
        name: string;
        email: string;
    };
    notes : {
        itemId: number;
        itemName: string;
        itemType: string;
        itemPrice: number;
    };
  };
}

// Define the initial state using that type
const initialState: paymentState = {
  isLoading: false,
  isError: false,
  message: "",
  success: false,
  orderResponse: {
    amount : 0,
    name : "",
    description : "",
    orderId: "",
    prefill : {
        name: "",
        email: "",
    },
    notes : {
        itemId: 0,
        itemName: "",
        itemType: "",
        itemPrice: 0,
    },
  },
  
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    createAnOrderStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    createAnOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.orderResponse = action.payload;
      state.success = true;
    },
    createAnOrderFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    orderPaidStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    orderPaidSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
    orderPaidFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const { createAnOrderStart,createAnOrderSuccess,createAnOrderFailure, orderPaidStart, orderPaidSuccess, orderPaidFailure } =
  paymentSlice.actions;

export default paymentSlice.reducer;
