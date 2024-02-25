import { AppDispatch } from "@/lib/store";
import {
  addItemToBagFailure,
  addItemToBagStart,
  addItemToBagSuccess,
  getUserBagFailure,
  getUserBagStart,
  getUserBagSuccess,
  removeItemFromBagFailure,
  removeItemFromBagStart,
  removeItemFromBagSuccess,
} from "@/slices/bagSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const cookies = new Cookies();

// Get data from cookies
const token = cookies.get("token");
// console.log("Token from cookies:", token);

// Handling Add Item To Users Bag
export const handleAddItemToBag =
  (tempId: number) => (dispatch: AppDispatch) => {
    dispatch(addItemToBagStart());
    return fetch(`${baseUrl}/user/bag/add?templateId=${tempId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(addItemToBagSuccess(response));
      })
      .catch((error: any) => {
        dispatch(addItemToBagFailure(error.message));
      });
  };

export const handleGetBag = () => async (dispatch: AppDispatch) => {
  dispatch(getUserBagStart());
  return fetch(`${baseUrl}/user/bag/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(getUserBagSuccess(response));
    })
    .catch((error) => {
      dispatch(getUserBagFailure(error));
    });
};

export const handleRemoveItemFromBag =
  (tempId: any) => async (dispatch: AppDispatch) => {
    dispatch(removeItemFromBagStart());
    return fetch(`${baseUrl}/user/bag/item/remove?templateId=${tempId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(removeItemFromBagSuccess(response));
      })
      .catch((error: any) => {
        dispatch(removeItemFromBagFailure(error));
      });
  };
