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

interface ComponentByCategory {
  tempId: number;
  title: string;
  category: string;
}

const componentsByCategory: ComponentByCategory[] = [];

export async function allPublishedComponents() {
  for (const category of components) {
    const response = await fetch(`${backendUrl}/component/?category=${category}`);
    const component: { tempId: number; title: string }[] = await response.json();
    component.map(item => {
      componentsByCategory.push({ tempId: item.tempId, title: item.title, category });
    });
  }
  return componentsByCategory;
}


const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export async function templateCategories(){
  const response  = await fetch(`${backendUrl}/category/`);
  const categories : [{categoryId:number,category:string}] = await response.json();
  return categories;
}

export async function allPublishedTemplates(){
  const response = await fetch(`${backendUrl}/category/get?category=All`);
  const templates : [{tempId:number,title:string}] = await response.json();
  return templates;
}


export {components};