import { AppDispatch } from "@/lib/store";
import { loginFailure, loginStart, loginSuccess } from "@/slices/authSlice";
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


// ------------------Handle Logout-------------------------------
export const handleLogout = () => (dispatch: AppDispatch) => {
  dispatch(loginStart());

  return fetch(`${baseUrl}/auth/logout`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((response) => {
      const date = new Date();
      date.setDate(date.getDate()+365);
      cookies.set("token","", { expires: date , secure:true, sameSite:'none' });
   
      return dispatch(loginSuccess(response));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
    
};