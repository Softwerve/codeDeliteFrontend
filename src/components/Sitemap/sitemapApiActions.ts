import { useAppSelector } from "@/lib/hooks";

const components = [
  "Navbar",
  "Forms",
  "Cards",
  "Graphs",
  "Buttons",
  "Switch",
  "Inputs",
  "Tables",
  "Lists",
  "Steppers",
  "Progress",
  "Spinners",
  "Alerts",
  "Drawers",
  "Menus",
  "Modals",
  "Slider",
  "PIN OTP Inputs",
  "Others",
];

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export async function templateCategories(){
  const response  = await fetch(`${backendUrl}/category/`);
  const categories : [{categoryId:number,category:string}] = await response.json();
  return categories;
}

export {components};