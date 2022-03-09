import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Cart } from './cart'
 import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})   
export class CartService {
  url = "http://localhost:9090/carts";
  surl = "http://localhost:9090/quantity";
  constructor(private http: HttpClient) {}

  addToCart(usrId:string,payload: any) {
    return this.http.post(this.url+ `/${usrId}`, payload);
  }
  // getCartItems(id: string) {
  //   return this.http.get(this.url+ `/${id}`);
  // }
  getCartItems(id: string) {
    return this.http.get(this.url+ `/${id}`);
  }
  getCartItemsById(id: String) {
    return this.http.get(this.url+ `/${id}` );
  }
  increaseQty(payload: any,usrId: String) {
    return this.http.post(this.url+ `/${usrId}`, payload);
  }
  removeItem(id:String,usrId:String) {
    return this.http.delete(this.url+ `/${id}`+ `/${usrId}`);   
  }
  decreaseQty(id:string,usrId:string) {
    return this.http.delete(this.surl+ `/${id}`+ `/${usrId}`);
  }   
  emptyCart() {
    return this.http.delete(this.url);
  }
  cartChanges(uId:any): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url+ `/${uId}`)
  }


}   
