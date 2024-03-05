import { AppDispatch } from "@/lib/store";
import {
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
