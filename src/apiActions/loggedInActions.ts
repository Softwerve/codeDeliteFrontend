import { AppDispatch } from "@/lib/store";
import { templatesByCategoryFailure, templatesByCategoryStart, templatesByCategorySuccess } from "@/slices/loggedIn";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:8080";

const cookies = new Cookies();
const token = cookies.get("token");

export const handleGetItemsWhenLoggedIn = (category: string,tempType: string) => (dispatch: AppDispatch) => {
  dispatch(templatesByCategoryStart());
  return fetch(`${baseUrl}/${tempType}/published/loggedin?category=${category}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(templatesByCategorySuccess(response));
    })
    .catch((error: any) => {
      dispatch(templatesByCategoryFailure(error));
    });
};