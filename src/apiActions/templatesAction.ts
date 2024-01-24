import { AppDispatch } from "@/lib/store";
import { getAllCategoriesFailure, getAllCategoriesStart, getAllCategoriesSuccess } from "@/slices/categorySlice";
import {  getAllPublishedTemplatesOfACategoryFailure, getAllPublishedTemplatesOfACategoryStart, getAllPublishedTemplatesOfACategorySuccess } from "@/slices/templateSlice";

const baseUrl = "http://localhost:8080";

export const handleGetAllPublishedTemplatesOfACategory = (category: string) => async(dispatch: AppDispatch)=>{
    dispatch(getAllPublishedTemplatesOfACategoryStart());
    try {
        const response = await fetch(`${baseUrl}/category/get?category=${category}`);
        const payload = await response.json();
        // console.log(category,payload);
        dispatch(getAllPublishedTemplatesOfACategorySuccess(payload));
    } catch (error: any) {
        dispatch(getAllPublishedTemplatesOfACategoryFailure(error.message));
    }
}

export const handleGetAllCategories = () => async(dispatch: AppDispatch) => {
    dispatch(getAllCategoriesStart());
    try {
        const response = await fetch(`${baseUrl}/category/`)
        const payload = await response.json();
        dispatch(getAllCategoriesSuccess(payload));
    } catch (error: any) {
        dispatch(getAllCategoriesFailure(error.message));
    }
}