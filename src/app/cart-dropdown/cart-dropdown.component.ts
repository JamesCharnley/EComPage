import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../_models/cart-item';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.css']
})
export class CartDropdownComponent implements OnInit {

  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.itemsChanged.subscribe((data) =>{
      this.cartItems = data;
    })
  }

  

}
