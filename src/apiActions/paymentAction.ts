import { AppDispatch } from "@/lib/store";
import { createAnOrderFailure, createAnOrderStart, createAnOrderSuccess, orderPaidFailure, orderPaidStart, orderPaidSuccess } from "@/slices/paymentSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const cookies = new Cookies();
const token = cookies.get('token');

// --------------------handle creating order---------------------------
export const handleCreateAnOrder = (tempId: number) => (dispatch: AppDispatch) => {
    dispatch(createAnOrderStart());
    return fetch(`${baseUrl}/payment/order/create?templateId=${tempId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(createAnOrderSuccess(response));
      })
      .catch((error: any) => {
        dispatch(createAnOrderFailure(error.message));
      });
  };

// ----------------------handle payment success----------------------
export const handleOrderPaymentSuccess = (successResponse:any) => (dispatch: AppDispatch) => {
  dispatch(orderPaidStart());
  return fetch(`${baseUrl}/payment/success`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(successResponse)
  }).then((response)=> response.json())
  .then((response)=> {
    dispatch(orderPaidSuccess(response));
    return response; 
  })
    .catch((error) => {
      dispatch(orderPaidFailure(error));
    });
};