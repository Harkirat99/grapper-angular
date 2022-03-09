import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',  
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  id: string = ''
  // products: Product[] = [];
  usrId: string =''
  userName: String = ''
  addComment: String = ''
 commentId:string = ''
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: CartService
    , private snackBar: MatSnackBar) {
    route.params.subscribe(params => {
      this.id = params.id
    })
  }

  ngOnInit(): void {
    this.getItem()
  }
  getItem() {
    this.productsService.get(this.id).subscribe((data: any) => {
      this.product = data
      this.commentId = this.product.id
    });
  }
        
  _addItemToCart(id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity,    
    };
    this.usrId = localStorage['userid']
    this.http.addToCart(this.usrId,payload).subscribe(() => {        
      this.snackBar.open('Added Successfully', '', {
        duration: 3000,
        panelClass :['test']
      });
    });
    this.http.getCartItems(this.usrId).subscribe(()=> {
      console.log('done')
    })
    window.location.reload();

  }

  
increaseQut(id:any){

  this.productsService.increase(id).subscribe(()=>{
  this.getItem();
  })      
}
         
decreaseQut(id:any){
  this.productsService.decrease(id).subscribe(()=>{
    this.getItem();
    })
}
backRoute(){
  this.router.navigate(['products'])
}

save(){
  let payload = {
    userName : this.userName,
    comment :  this.addComment
   
  };
  this.productsService.comment(payload,this.commentId,).subscribe(()=>{
    this.getItem();
    this.snackBar.open('Saved Sucessfully', '', {
      duration: 3000,     
    });
  })
}


selectImage(image: string) {
  this.product.pic = image
}
} 
   