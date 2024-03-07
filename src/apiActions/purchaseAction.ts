import { AppDispatch } from "@/lib/store";
import {
  getPurchasedBagFailure,
  getPurchasedBagStart,
  getPurchasedBagSuccess,
  giveFeedbackToPurchasedItemFailure,
  giveFeedbackToPurchasedItemStart,
  giveFeedbackToPurchasedItemSuccess,
  purchaseFreeItemFailure,
  purchaseFreeItemStart,
  purchaseFreeItemSuccess,
} from "@/slices/purchaseSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const cookies = new Cookies();
const token = cookies.get("token");

export const handlePurchaseFreeItem =
  (itemId: number) => (dispatch: AppDispatch) => {
    dispatch(purchaseFreeItemStart());
    return fetch(`${baseUrl}/purchase/item/free?itemId=${itemId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((payload) => {
        return dispatch(purchaseFreeItemSuccess(payload));
      })
      .catch((error) => {
        dispatch(purchaseFreeItemFailure(error));
      });
  };

export const handleGetPurchasedBag = () => (dispatch:AppDispatch) => {
  dispatch(getPurchasedBagStart())
  return fetch(`${baseUrl}/purchase/bag`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((payload) => {
      return dispatch(getPurchasedBagSuccess(payload));
    })
    .catch((error) => {
      dispatch(getPurchasedBagFailure(error));
    });
}

export const handleGiveFeedbackToPurchasedItem = (itemId:number,feedback:string) => (dispatch:AppDispatch) => {
  dispatch(giveFeedbackToPurchasedItemStart())
  return fetch(`${baseUrl}/purchase/item/feedback?itemId=${itemId}&feedback=${feedback}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((payload) => {
      return dispatch(giveFeedbackToPurchasedItemSuccess(payload));
    })
    .catch((error) => {
      dispatch(giveFeedbackToPurchasedItemFailure(error));
    });
}


