import { AppDispatch } from "@/lib/store";
import {
  getAllCategoriesFailure,
  getAllCategoriesStart,
  getAllCategoriesSuccess,
} from "@/slices/categorySlice";
import {
  addItemToLovedListFailure,
  addItemToLovedListStart,
  addItemToLovedListSuccess,
  getAllLovedTemplatesFailure,
  getAllLovedTemplatesStart,
  getAllLovedTemplatesSuccess,
  getAllPublishedTemplatesOfACategoryFailure,
  getAllPublishedTemplatesOfACategoryStart,
  getAllPublishedTemplatesOfACategorySuccess,
  getTemplateOrComponentByIdFailure,
  getTemplateOrComponentByIdStart,
  getTemplateOrComponentByIdSuccess,
  removeItemFromLovedListFailure,
  removeItemFromLovedListStart,
  removeItemFromLovedListSuccess,
  searchTemplateFailure,
  searchTemplateStart,
  searchTemplateSuccess,,
} from "@/slices/templateSlice";
import Cookies from "universal-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const cookies = new Cookies();
const token = cookies.get("token");

export const handleGetAllPublishedTemplatesOfACategory =
  (category: string) => async (dispatch: AppDispatch) => {
    dispatch(getAllPublishedTemplatesOfACategoryStart());
    try {
      const response = await fetch(
        `${baseUrl}/category/get?category=${category}`
      );
      const payload = await response.json();
      // console.log(category,payload);
      dispatch(getAllPublishedTemplatesOfACategorySuccess(payload));
    } catch (error: any) {
      dispatch(getAllPublishedTemplatesOfACategoryFailure(error.message));
    }
  };

export const handleGetAllCategories = () => async (dispatch: AppDispatch) => {
  dispatch(getAllCategoriesStart());
  try {
    const response = await fetch(`${baseUrl}/category/`);
    const payload = await response.json();
    dispatch(getAllCategoriesSuccess(payload));
  } catch (error: any) {
    dispatch(getAllCategoriesFailure(error.message));
  }
};

export const handleAddItemToLovedList =
  (tempId: any) => (dispatch: AppDispatch) => {
    dispatch(addItemToLovedListStart());
    return fetch(`${baseUrl}/user/loved/add?templateId=${tempId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(addItemToLovedListSuccess(response));
      })
      .catch((error) => {
        dispatch(addItemToLovedListFailure(error));
      });
  };

export const handleGetAllLovedLists = () => async (dispatch: AppDispatch) => {
  dispatch(getAllLovedTemplatesStart());
  try {
    const response = await fetch(`${baseUrl}/user/loved/items`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const payload = await response.json();
    // console.log(payload);
    dispatch(getAllLovedTemplatesSuccess(payload));
  } catch (error) {
    dispatch(getAllLovedTemplatesFailure(error));
  }
};

export const handleRemoveItemFromLovedList =
  (tempId: any) => (dispatch: AppDispatch) => {
    dispatch(removeItemFromLovedListStart());

    return fetch(`${baseUrl}/user/loved/item/remove?templateId=${tempId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return dispatch(removeItemFromLovedListSuccess(response));
      })
      .catch((error) => {
        dispatch(removeItemFromLovedListFailure(error));
      });
  };

  // Handle Get Template or Component By Id

  export const handleGetTemplateorComponentById = (id:number) => async (dispatch: AppDispatch) => {
    dispatch(getTemplateOrComponentByIdStart());
      return await fetch(`${baseUrl}/template/item?templateId=${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response)=> response.json())
      .then((response)=> {
        return dispatch(getTemplateOrComponentByIdSuccess(response));
      }).catch((error)=>{
        dispatch(getTemplateOrComponentByIdFailure(error));
      });
  }


// Handle Search Template
  export const handleSearchTemplate = (keyword:string) => async (dispatch: AppDispatch) => {
    dispatch(searchTemplateStart());
      return await fetch(`${baseUrl}/template/search/website?keyword=${keyword}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response)=> response.json())
      .then((response)=> {
        return dispatch(searchTemplateSuccess(response));
      }).catch((error)=>{
        dispatch(searchTemplateFailure(error));
      });
  }
  
