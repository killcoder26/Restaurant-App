import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ICart } from '../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  public cartList: ICart[] | any;

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartList = data;
    })

  }


}
