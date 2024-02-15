import { AppDispatch } from "@/lib/store";
import { componentsOfACategoryFailure, componentsOfACategoryStart, componentsOfACategorySuccess } from "@/slices/componentsSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const cookies = new Cookies();
const token = cookies.get("token");

export const handleComponentsByCategory = (category: string) => (dispatch: AppDispatch) => {
  dispatch(componentsOfACategoryStart());
  return fetch(`${baseUrl}/component/?category=${category}`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      return dispatch(componentsOfACategorySuccess(response));
    })
    .catch((error: any) => {
      dispatch(componentsOfACategoryFailure(error));
    });
};
