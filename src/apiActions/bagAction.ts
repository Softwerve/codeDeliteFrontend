import { AppDispatch } from "@/lib/store";
import { addItemToBagFailure, addItemToBagStart, addItemToBagSuccess } from "@/slices/bagSlice";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:8080";

const cookies = new Cookies();

// Get data from cookies
const token = cookies.get("token");
console.log("Token from cookies:", token);

// Handling Add Item To Users Bag
export const handleAddItemToBag = (tempId: number) => async (dispatch: AppDispatch) => {
    dispatch(addItemToBagStart());
    try {
      const response = await fetch(
        `${baseUrl}/user/bag/add?templateId=${tempId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const payload = await response.json();
      dispatch(addItemToBagSuccess(payload));
    } catch (error: any) {
        dispatch(addItemToBagFailure(error.message));
    }
  };
