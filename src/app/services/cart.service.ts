import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }


  public getCartItems(): Observable<ICart> {
    return this.http.get<ICart>(`http://localhost:3000/cartItems`);
  }

  public addToCart(cartDetails: ICart): Observable<ICart> {
    console.log("Inside Service:")
    console.log(cartDetails);
    return this.http.post<ICart>(`http://localhost:3000/cartItems/`, cartDetails, {
      headers: {
        "Content-Type": "application/json"
      }
    }).pipe(map((res: any) => {
      res.statusCode = 200;
      res.body = JSON.stringify(cartDetails);
      return res;
    }))
  }

  public addToCart2(cartDetails: ICart) {
    console.log("Inside Service:")
    console.log(cartDetails);
    const res = fetch("http://localhost:3000/cartItems/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
  }





  public deleteCartItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/cartItems/${id}`);
  }
}
