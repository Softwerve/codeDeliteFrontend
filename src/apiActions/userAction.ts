import { AppDispatch } from "@/lib/store";
import { userDetailsFailure, userDetailsStart, userDetailsSuccess } from "@/slices/userSlice";
import Cookies from "universal-cookie"

const baseUrl = 'http://localhost:8080'

const cookies = new Cookies();
const token = cookies.get('token');

export const handleUserDetails = () => async(dispatch: AppDispatch) => {
    dispatch(userDetailsStart());
    try {
        const response = await fetch(`${baseUrl}/user/`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const payload = await response.json();
        console.log(payload);
        dispatch(userDetailsSuccess(payload));
    } catch (error: any) {
        dispatch(userDetailsFailure(error));
    }
}