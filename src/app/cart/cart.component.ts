import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']   
})
export class CartComponent implements OnInit {
  //item : Item[] = [];
  carts:any;
  cartDetails: any;        
  snackbar: any;
 uId:string=''
 usrId:string=''
  constructor(private http: CartService, private snackBar: MatSnackBar,
    private router: Router) { }
   
  _getCart(): void {  
     this.uId = localStorage['userid']
    this.http.getCartItems(this.uId).subscribe((data: any) => {
      this.carts = data;
       this.cartDetails = data.subTotal;
       localStorage['cartComponentSubtoal'] = this.cartDetails;
      console.log(this.carts);    
    });    
  }    
      
  _increamentQTY(id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.usrId = localStorage['userid']
    this.http.increaseQty(payload,this.usrId).subscribe(() => {
      this._getCart();
      this.snackBar.open('increased Quantity', '', {
        duration: 3000,     
      });
    });       
  }


  _emptyCart(): void {
    this.http.emptyCart().subscribe(() => {
      this._getCart(); 
      this.snackBar.open('Deleted sucessfuly', '', {
        duration: 3000,
       
      });
    });
  }
  ngOnInit(): void {
    this._getCart();
  }

  order(){
    this.router.navigate(['orders'])
  }
 remItem(id: any) {
  this.usrId = localStorage['userid']

  this.http.removeItem(id,this.usrId).subscribe(() => {
    this._getCart()
    this.snackBar.open('Removed item', '', {
      duration: 3000,
     
    });
  })
 }


 
 _decrementQTY(id: any): void { 
  this.usrId = localStorage['userid']
  this.http.decreaseQty(id,this.usrId).subscribe(() => {
    this._getCart();
    this.snackBar.open('decreased Quantity', '', {
      duration: 3000,
     
    });
  });       
}


}




