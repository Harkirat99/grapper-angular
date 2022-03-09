import { Injectable } from '@angular/core';
import {Order} from './order';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:9090";

  constructor(private http: HttpClient) { }

   post(obj:Order): Observable<Order> {
     return this.http.post<Order>(this.url + `/pay`,obj)
   }

  //  get(id: string): Observable<Order> {
  //   return this.http.get<Order>(this.url +`/pay`+ `/${id}`);
  // }

}
