import { images } from "@/constant/images";

export interface brandInterface {
    name: string;
    time: string;
    image: any; 
}

export const BrandData = [
    {
        id: 1,
        name: "KFC",
        time: "35",
        image: images.kfc
    },
    {
        id: 2,
        name: "Dominos",
        time: "35",
        image: images.dominos
    },
    {
        id: 3,
        name: "Burger King",
        time: "35",
        image: images.burgerking
    },
    {
        id: 4,
        name: "MCdonal",
        time: "35",
        image: images.mekdi
    },
]