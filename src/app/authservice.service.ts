import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../app/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  url = "http://localhost:9090";
  isLoggedIn = false;
  constructor(
    private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value
  }

  register(obj: User): Observable<User> {
    return this.http.post<User>(this.url + `/register`, obj);
  }

  login(obj: User): Observable<User> {
    return this.http.post<User>(this.url + `/login`, obj);
  }
  get(id: string): Observable<User> {
    return this.http.get<User>(this.url + `/${id}`);
  }
  find(obj: User): Observable<User> {
    return this.http.post<User>(this.url +`/get` ,obj)
  }
}
