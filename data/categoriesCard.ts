import { images } from "@/constant/images";

export interface catInterface {
    title: string;
    image: any; 
}

export const catData = [
    {
        id: 1,
        title: "Burger",
        image: images.burger,
    },
    {
        id: 2,
        title: "Pizza",
        image: images.pizza,
    },
    {
        id: 3,
        title: "Cola",
        image: images.drink,
    },
    {
        id: 4,
        title: "Chicken",
        image: images.chicken,
    }
]