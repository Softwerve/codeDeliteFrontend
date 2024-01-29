import { AppDispatch } from "@/lib/store";
import {
  userDetailsFailure,
  userDetailsStart,
  userDetailsSuccess,
} from "@/slices/userSlice";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:8080";

const cookies = new Cookies();
const token = cookies.get("token");

export const handleUserDetails = () => (dispatch: AppDispatch) => {
  dispatch(userDetailsStart());
  return fetch(`${baseUrl}/user/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(userDetailsSuccess(response));
    })
    .catch((error: any) => {
      dispatch(userDetailsFailure(error));
    });
};
