import { AppDispatch } from "@/lib/store";
import { likeItemFailure, likeItemStart, likeItemSuccess, templatesByCategoryFailure, templatesByCategoryStart, templatesByCategorySuccess, unlikeItemFailure, unlikeItemStart, unlikeItemSuccess } from "@/slices/loggedIn";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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

export const handleLikeTemplate = (tempId:number) => (dispatch: AppDispatch) => {
  dispatch(likeItemStart());
  return fetch(`${baseUrl}/user/like?templateId=${tempId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return dispatch(likeItemSuccess(response));
    })
    .catch((error: any) => {
      dispatch(likeItemFailure(error));
    });
};

export const handleUnlikeTemplate = (tempId:number) => (dispatch: AppDispatch) => {
  dispatch(unlikeItemStart());
  return fetch(`${baseUrl}/user/unlike?templateId=${tempId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return dispatch(unlikeItemSuccess(response));
    })
    .catch((error: any) => {
      dispatch(unlikeItemFailure(error));
    });
};


// Handle Search component
// export const handleSearchTemplate = (keyword:string) => async (dispatch: AppDispatch) => {
//   dispatch(searchComponentStart());
//     return await fetch(`${baseUrl}/template/search/component?keyword=${keyword}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((response)=> response.json())
//     .then((response)=> {
//       return dispatch(searchComponentSuccess(response));
//     }).catch((error)=>{
//       dispatch(searchComponentFailure(error));
//     });
// }