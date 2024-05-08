import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { CartService } from '../cart.service';
import { CartItem } from '../_models/cart-item';
import { Size } from '../_models/size';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productInfo: Product | undefined;
  selectedSize: Size | undefined;
  constructor(private http: HttpClient, private cartService: CartService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.http.get<Product>('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product').subscribe({
      next: response => this.productInfo = response,
      error: error => console.log(error),
      complete: () => console.log(this.productInfo)
    })
  }

  AddToCart()
  {
    console.log("AddToCart");
    if(this.selectedSize == undefined)
      {
        console.log("selected size undefined");
        this.toastr.error("Size must be selected");
        return;
      }
    if(this.productInfo)
    {
      console.log("Added to cart");
      let item: CartItem = {id: this.productInfo.id, title: this.productInfo.title, quantity: 1, price: this.productInfo.price, imageURL: this.productInfo.imageURL, size: this.selectedSize };
      this.cartService.AddToCart(item);
    }
    
  }
  SetSize(size: Size)
  {
    this.selectedSize = size;
  }
}
