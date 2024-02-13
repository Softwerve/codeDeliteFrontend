import { AppDispatch } from "@/lib/store";
import {
    authorPublishedComponentsFailure,
    authorPublishedComponentsStart,
    authorPublishedComponentsSuccess,
    authorPublishedWebsitesFailure,
    authorPublishedWebsitesStart,
  authorPublishedWebsitesSuccess,
  followAuthorFailure,
  followAuthorStart,
  followAuthorSuccess,
  getAllFollowedAuthorsFailure,
  getAllFollowedAuthorsStart,
  getAllFollowedAuthorsSuccess,
} from "@/slices/followSlice";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:8080";

const cookies = new Cookies();
const token = cookies.get("token");


// handle follow a author
export const handleFollowAuthor =
  (authorId: number) => (dispatch: AppDispatch) => {
    dispatch(followAuthorStart());
    return fetch(`${baseUrl}/user/follow/author?authorId=${authorId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(followAuthorSuccess(response));
      })
      .catch((error: any) => {
        dispatch(followAuthorFailure(error));
      });
  };

  // handle follow a author
export const handleUnfollowAuthor =
(authorId: number) => (dispatch: AppDispatch) => {
  dispatch(followAuthorStart());
  return fetch(`${baseUrl}/user/unfollow/author?authorId=${authorId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(followAuthorSuccess(response));
    })
    .catch((error: any) => {
      dispatch(followAuthorFailure(error));
    });
};


// handling get all followed authors
export const handleGetAllFollowedAuthors = () => (dispatch: AppDispatch) => {
  dispatch(getAllFollowedAuthorsStart());
  return fetch(`${baseUrl}/user/followed/authors`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(getAllFollowedAuthorsSuccess(response));
    })
    .catch((error: any) => {
      dispatch(getAllFollowedAuthorsFailure(error));
    });
};

// handling get all websites published by author
export const handleGetAuthorsPublishedWebsites = (authorId: number) => (dispatch: AppDispatch) => {
    dispatch(authorPublishedWebsitesStart());
    return fetch(`${baseUrl}/user/followed/author/websites?authorId=${authorId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(authorPublishedWebsitesSuccess(response));
      })
      .catch((error: any) => {
        dispatch(authorPublishedWebsitesFailure(error));
      });
  };

  

// handling get all web components published by author
export const handleGetAuthorsPublishedComponents = (authorId:number) => (dispatch: AppDispatch) => {
    dispatch(authorPublishedComponentsStart());
    return fetch(`${baseUrl}/user/followed/author/components?authorId=${authorId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(authorPublishedComponentsSuccess(response));
      })
      .catch((error: any) => {
        dispatch(authorPublishedComponentsFailure(error));
      });
  };