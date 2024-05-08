import { Size } from "./size";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: Size[];
}