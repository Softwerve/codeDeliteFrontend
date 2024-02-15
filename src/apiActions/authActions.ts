import { AppDispatch } from "@/lib/store";
import { loginFailure, loginStart, loginSuccess } from "@/slices/authSlice";
import { availableUsernameFailure, availableUsernameStart, availableUsernameSuccess, sendOtpFailure, sendOtpStart, sendOtpSuccess, signupFailure, signupStart, signupSuccess } from "@/slices/userSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const authorDashboard = 'http://localhost:3002/'

const cookies = new Cookies();

// --------------------handling send otp---------------------------
export const handleSendOtp = (email: string) => (dispatch: AppDispatch) => {
    dispatch(sendOtpStart());
    return fetch(`${baseUrl}/user/sendOtp?email=${email}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        return dispatch(sendOtpSuccess(response));
      })
      .catch((error: any) => {
        dispatch(sendOtpFailure(error.message));
      });
  };
  
  
  // -----------------------Handling Signup Author-----------------------
  export const handleSignUpUser = (user: any,otp:number) => async (dispatch: AppDispatch) => {
    console.log(user);
      dispatch(signupStart());
      return fetch(`${baseUrl}/author/signup?otp=${otp}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          return dispatch(signupSuccess(response));
        })
        .catch((error) => {
          dispatch(signupFailure(error));
        });
    };
    
  
    // ------------------Handle Login-------------------------------
  export const handleLogin = (credentials: any) => (dispatch: AppDispatch) => {
    dispatch(loginStart());
  
    return fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const date = new Date();
        date.setDate(date.getDate()+365);
        cookies.set("token", response.token, { expires: date , secure:true, sameSite:'none' });
        window.location.href = authorDashboard;
        return dispatch(loginSuccess(response));
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };

  
    

  // ----------------------------Handling Available Username-------------------------------
export const handleAvailableUsername =
(username: string) => (dispatch: AppDispatch) => {
  dispatch(availableUsernameStart());
  return fetch(`${baseUrl}/user/username/available?username=${username}`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      return dispatch(availableUsernameSuccess(response));
    })
    .catch((error) => {
      dispatch(availableUsernameFailure(error));
    });
};

