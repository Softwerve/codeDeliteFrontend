import { AppDispatch } from "@/lib/store";
import { getAllOrdersFailure, getAllOrdersStart, getAllOrdersSuccess, getAllPaidOrdersFailure, getAllPaidOrdersStart, getAllPaidOrdersSuccess, getAllPendingOrdersFailure, getAllPendingOrdersStart, getAllPendingOrdersSuccess } from "@/slices/ordersSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const cookies = new Cookies();
const token = cookies.get('token');

// --------------------handle get all orders---------------------------
export const handleGetAllOrders = () => (dispatch: AppDispatch) => {
    dispatch(getAllOrdersStart());
    return fetch(`${baseUrl}/payment/orders/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(getAllOrdersSuccess(response));
      })
      .catch((error: any) => {
        dispatch(getAllOrdersFailure(error.message));
      });
  };


  // --------------------handle get all paid orders---------------------------
export const handleGetAllPaidOrders = () => (dispatch: AppDispatch) => {
    dispatch(getAllPaidOrdersStart());
    return fetch(`${baseUrl}/payment/orders/paid`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(getAllPaidOrdersSuccess(response));
      })
      .catch((error: any) => {
        dispatch(getAllPaidOrdersFailure(error.message));
      });
  };



// ----------------------handle get all pending orders----------------------
export const handleGetAllPendingOrders = () => (dispatch: AppDispatch) => {
  dispatch(getAllPendingOrdersStart());
  return fetch(`${baseUrl}/payment/orders/pending`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=> response.json())
  .then((response)=> {
    return dispatch(getAllPendingOrdersSuccess(response));
  })
    .catch((error) => {
      dispatch(getAllPendingOrdersFailure(error));
    });
};

