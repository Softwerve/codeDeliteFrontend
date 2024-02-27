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
  inspireByAuthorFailure,
  inspireByAuthorStart,
  inspireByAuthorSuccess,
} from "@/slices/followSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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

  // handle unfollow a author
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


// handling get inspired by another author
export const handleGetInspiredByAuthor = (id:number) => (dispatch: AppDispatch) => {
  dispatch(inspireByAuthorStart());
  return fetch(`${baseUrl}/author/inspiration/add?inspirationId=${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(inspireByAuthorSuccess(response));
    })
    .catch((error: any) => {
      dispatch(inspireByAuthorFailure(error));
    });
};

// handling remove another author from inspiration list 
export const handleRemoveFromInspiration = (id:number) => (dispatch: AppDispatch) => {
  dispatch(inspireByAuthorStart());
  return fetch(`${baseUrl}/author/inspiration/remove?inspirationId=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(inspireByAuthorSuccess(response));
    })
    .catch((error: any) => {
      dispatch(inspireByAuthorFailure(error));
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