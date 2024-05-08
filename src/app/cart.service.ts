import { Injectable } from '@angular/core';
import { Product } from './_models/product';
import { Subject } from 'rxjs';
import { CartItem } from './_models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsChanged: Subject<any> = new Subject<any>();
  items: CartItem[] = [];
  constructor() { }

  AddToCart(item: CartItem){
    let exists: boolean = false;
    this.items.forEach(function (value){
      if(value.id == item.id && value.size == item.size)
        {
          value.quantity += 1;
          exists = true;
        }
    })
    if(exists == false)
      {
        this.items.push(item);
      }
   
    this.CartUpdated();
  }

  EmptyCart(){
    this.items = [];
    this.CartUpdated();
  }

  GetCartContents(){
    return this.items;
  }

  CartUpdated()
  {
    this.itemsChanged.next(this.items);
  }
}
