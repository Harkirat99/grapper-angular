import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // product: Product = new Product({});
  id: string = ''
  // name:string = ''
   query:string = ''
  //  SearchArray: any
   ProductName: any
    value:string ="testing"
   products: Product[] = [];
   puma: String = ''
 addidas: String = ''
 asian: String = ''
 woodland: String = ''
 sparx: String = ''
    constructor(private productService: ProductsService, private router: Router,) {
      this.loadAllProducts();
  }   

  ngOnInit(): void {
    //  this.func()
  }
  loadAllProducts(){
    this.ProductName = localStorage['searchValue']
    this.productService.query(this.ProductName).subscribe((entites: Product[]) =>{
      this.products = entites;

      if(this.products.length == 0){
          alert('No products found')
      this.router.navigate(['/products']);
      }
   
    })
  }
  //  value="";
  
  clearValue() {
    this.value="";   
     
  } 
   view(id:String){
     this.router.navigate(['/products',id]);
   }
   backRoute(){
     this.router.navigate(['/products'])
   }


   cPuma(e:any){
    if(e.checked){ 
       this.puma='Puma'
    }  
   if(!e.checked){ 
      this.puma=''
   }
  }
  cAddidas(e:any){
    if(e.checked){ 
       this.addidas='Addidas'
    }  
   if(!e.checked){ 
      this.addidas=''
   }
  }
  cWoodland(e:any){
    if(e.checked){ 
       this.woodland='Woodland'
    }  
   if(!e.checked){ 
      this.woodland=''
   }
  }
  cAsian(e:any){
    if(e.checked){ 
       this.asian='Asian'
    }  
   if(!e.checked){ 
      this.asian=''
   }
  }
  cSparx(e:any){
    if(e.checked){ 
       this.sparx='Sparx'
    }  
   if(!e.checked){ 
      this.sparx=''
   }
  }

  getBrand(){
    localStorage['pumaValue'] = this.puma
    localStorage['addidasValue'] = this.addidas
    localStorage['woodlandValue'] = this.woodland
    localStorage['asianValue'] = this.asian
    localStorage['sparxValue'] = this.sparx
    this.router.navigate(['brands'])
  }

}
