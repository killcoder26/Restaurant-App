import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ICart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public num: number = 0;
  public cartList: ICart | any;
  constructor(public cartService: CartService) { }

  async ngOnInit() {
    await this.cartService.getCartItems().subscribe((data) => {
      this.cartList = data;
    })

    this.num = this.cartList.length;
    console.log(this.cartList);
  }


}
