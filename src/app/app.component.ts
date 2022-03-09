import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { CartService } from './cart.service';
import { Cart } from './cart'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grapper-ang';
  carts: any;
  uId: string = ''
  search: String = ''
  cartBadge: Cart = new Cart({});
  // search: String = ''
  a = 0;
  constructor(public auth: AuthserviceService,
    private http: CartService,
    public router: Router) {
      // this.getCart()

  }
  onSearch() {
    localStorage['searchValue'] = this.search
    this.router.navigate(['search'])
  }

  crtItm() {
    for (var i = 0; i < this.carts.items.length; i++) {
      this.a++
    }
    console.log(this.a)
  }
  logout() {
    this.auth.isLoggedIn = false
    this.router.navigate(["login"])
  }
  cart() {
    this.router.navigate(['cart'])
  }
  productroute() {    
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
     this.getCart();
    this.crtItm()
  }
  getCart(){
    this.uId= localStorage['userid']
    this.http.getCartItems(this.uId).subscribe((data:any)=>{
    this.carts = data;
    console.log('done')
    })
  }
  testroute() {
    this.router.navigate(['test'])
  }
  // onSearch(){
  //   localStorage['searchValue'] = this.search
  //   this.router.navigate(['search'])
  // }

  funtview() {
    this.router.navigate(['products'])
  }
}
