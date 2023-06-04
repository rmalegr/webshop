import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'http://via.placelder.com/150',
      name: 'snikers',
      price: 2.5,
      quantity: 2,
      id: 1
    }],
  }
  constructor() { }

  ngOnInit(): void {
  }

}
