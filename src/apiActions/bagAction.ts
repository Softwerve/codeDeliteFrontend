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

const baseUrl = "http://localhost:8080";

const cookies = new Cookies();

// cookies.set('token', 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV0sInN1YiI6InJpc2hhYmh5YWRhdjM2MDJAZ21haWwuY29tIiwiaWF0IjoxNzA2MTI3NTE5LCJleHAiOjE3MDY5OTE1MTl9.eQuOJ1inysFsD2Z9Q2397_n_-U8sI7af4MF5yCt4LwZwRs_rpq3Y1UcbO3YNvELE9Of0qSmC0X9tACZ10oM-Dw', { path: '/' });

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
