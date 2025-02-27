import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../_models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
