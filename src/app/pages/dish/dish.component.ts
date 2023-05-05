import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import IDish from '../../model/dish';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from 'src/app/model/cart';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  public dishList: IDish[] | any;

  public constructor(private dataservice: DataService,
    private cartservice: CartService,
    private route: ActivatedRoute,
    private router: Router) { }

  public filterString = "";
  public cartData = {
    id: 0,
    dishID: 0,
    dishQuantity: 0,
  };

  public cartID: number = 1;


  ngOnInit(): void {
    var catName = this.route.snapshot.paramMap.get('catName')
    console.log(catName);

    if (catName == null) {
      catName = "chinese";
    }
    this.dataservice.getDishesByCategoryName(catName).subscribe((dishes: IDish[]) => {
      this.dishList = dishes;
    })

    this.cartservice.getCartItems().subscribe((items: any) => {
      this.cartID = items[items.length - 1].id;
      console.log(this.cartID);
    })


  }

  deleteItem(id: number) {
    this.dataservice.deleteDish(id).subscribe({
      next(data) {
        console.log(data);
      },
      error(err) {
        console.log(err);

      }
    })

    window.location.reload();
  }

  async cartPost(cartData: any) {
    await this.cartservice.addToCart(cartData).subscribe({
      next(data) {
        console.log("Response Data:");
        console.log(data);
      }
      , error(err) {
        console.log(err);
      },
    });
    // await this.cartservice.addToCart2(cartData);
  }

  async addtocart(id: number) {
    await this.dataservice.getDishesByID(id).subscribe(dish => {

    });
    await this.cartPost(this.cartData);
  }



}