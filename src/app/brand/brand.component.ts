import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  id: string = ''
brand1value: string = ''
products: Product[] = [];
minimumPrice: Number | undefined
maximumPrice: Number | undefined
puma: String = ''
 addidas: String = ''
 asian: String = ''
 woodland: String = ''
 sparx: String = ''

  constructor(private productService: ProductsService, private router: Router) { 
    this.loadBrand()
  }

  ngOnInit(): void {
  }
 loadBrand() {
    this.brand1value= localStorage['brand1value'];
    this.productService.brand(this.brand1value).subscribe((entites: Product[]) => {
      this.products = entites;
    })

}

view(id:string){
  this.router.navigate(['products',id]);
  }

  priceRange(){
    localStorage['miniPrice'] = this.minimumPrice
    localStorage['maxiPrice'] = this.maximumPrice
    this.router.navigate(['filterPrice'])
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
  backRoute(){
   this.router.navigate(['home'])
 }
}
