import { AppDispatch } from "@/lib/store";
import { componentsOfACategoryFailure, componentsOfACategoryStart, componentsOfACategorySuccess, searchComponentFailure, searchComponentStart, searchComponentSuccess } from "@/slices/componentsSlice";
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


// Handle Search component
export const handleSearchComponents = (keyword:string) => async (dispatch: AppDispatch) => {
  dispatch(searchComponentStart());
    return await fetch(`${baseUrl}/template/search/component?keyword=${keyword}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response)=> response.json())
    .then((response)=> {
      return dispatch(searchComponentSuccess(response));
    }).catch((error)=>{
      dispatch(searchComponentFailure(error));
    });
}
