import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products'
import { Cart } from './cart'

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'    
})

export class ProductsService {
  url = "http://localhost:9090/products";
  Iurl = "http://localhost:9090/increase";
  Durl = "http://localhost:9090/decrease";
  Ourl = "http://localhost:9090/pay";
  Purl = "http://localhost:9090/filterProduct";
  Curl = "http://localhost:9090/comments";
  Burl = "http://localhost:9090/brands"

  constructor(private http: HttpClient) { }

  search(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  get(id: string){
    return this.http.get(this.url + `/${id}`);
  }
  post(obj: Product): Observable<Product> {
    return this.http.post<Product>(this.url, obj);
  }
  // decreaseQty(id:string,usrId:string) {
  //   return this.http.delete(this.surl+ `/${id}`+ `/${usrId}`);
  // } 
  order(obj:any){
    return this.http.post(this.Ourl,obj);
  }
    increase(id: any): Observable<Product> {
    return this.http.delete<Product>(this.Iurl+ `/${id}`);
  }
  decrease(id: any): Observable<Product> {
    return this.http.delete<Product>(this.Durl+ `/${id}`);
  }
  query(ProductName: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.Durl+`?name=${ProductName}`);
  }
  category(men: any,women:any,child:any): Observable<Product[]> {
    return this.http.get<Product[]>(this.Iurl+`?ideal=${men}&ideal=${women}&ideal=${child}`);
  } 
   brands(puma: any,addidas:any,woodland:any ,asian:any,sparx:any): Observable<Product[]> {
    return this.http.get<Product[]>(this.Burl+`?manufacturer=${puma}&manufacturer=${addidas}&manufacturer=${woodland}&manufacturer=${asian}&manufacturer=${sparx}`);
  }

  filterPrice(miniValue: number, maxiValue:number): Observable<Product[]> {
    return this.http.get<Product[]>(this.Purl +`/${miniValue}`+`/${maxiValue}`)
  }
  brand(brandval: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+`?manufacturer=${brandval}`);
  }
  categories(categoriesValue: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+`?category=${categoriesValue}`);
  }
   comment(payload: any,commentId:string){
    return this.http.post(this.Curl+ `/${commentId}`, payload);
  }

}


