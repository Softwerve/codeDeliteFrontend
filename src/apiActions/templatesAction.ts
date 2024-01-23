import { AppDispatch } from "@/lib/store";
import { getAllPublishedTemplatesFailure, getAllPublishedTemplatesStart, getAllPublishedTemplatesSuccess } from "@/slices/templateSlice";

const baseUrl = "http://localhost:8080";

export const handleGetAllPublishedTemplates = () => async(dispatch: AppDispatch) => {
    dispatch(getAllPublishedTemplatesStart());
    try{
        const response = await fetch(`${baseUrl}/template/published`);
        const payload = await response.json();
        console.log(payload);
        dispatch(getAllPublishedTemplatesSuccess(payload));
    }catch(err: any){
        dispatch(getAllPublishedTemplatesFailure(err.message))
    }

}