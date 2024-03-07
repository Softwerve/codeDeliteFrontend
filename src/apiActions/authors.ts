import { AppDispatch } from "@/lib/store";
import {
  authorsFollowCardsFailure,
  authorsFollowCardsStart,
  authorsFollowCardsSuccess,
} from "@/slices/authorsSlice";

import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const cookies = new Cookies();
const token = cookies.get("token");

// -------------------------handling all authors follow cards----------------------------------
export const handleGetAllAuthorsFollowCards = () => (dispatch: AppDispatch) => {
  dispatch(authorsFollowCardsStart());
  return fetch(`${baseUrl}/author/all/loggedin`,{
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((response) => {
    //   console.log(response);
      return dispatch(authorsFollowCardsSuccess(response));
    })
    .catch((error: any) => {
      dispatch(authorsFollowCardsFailure(error.message));
    });
};

// -------------------------handling all authors follow cards----------------------------------
export const handleGetAllAuthorsFollowCardsWithoutLogin = () => (dispatch: AppDispatch) => {
  dispatch(authorsFollowCardsStart());
  return fetch(`${baseUrl}/author/all`,{
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(authorsFollowCardsSuccess(response));
    })
    .catch((error: any) => {
      dispatch(authorsFollowCardsFailure(error.message));
    });
};
