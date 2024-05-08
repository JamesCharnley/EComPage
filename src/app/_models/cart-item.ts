import { Size } from "./size";

export interface CartItem {
    id: number;
    title: string;
    quantity: number;
    price: number;
    imageURL: string;
    size: Size;
}