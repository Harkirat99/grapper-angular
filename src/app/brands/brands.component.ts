import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../products';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  puma: String = ''
  addidas: String = ''
  asian: String = ''
  woodland: String = ''
  sparx: String = ''

  lPuma: String = ''
  lAddidas: String = ''
  lWoodland: String = ''
  lAsian: String = ''
  lSparx: String = ''

  products: Product[] = [];

  constructor(private productService: ProductsService, private router: Router) { 
    this.loadBrand();
  }

  ngOnInit(): void {
  }

  loadBrand() {
    this.lPuma = localStorage['pumaValue']
    this.lAddidas = localStorage['addidasValue']
    this.lWoodland = localStorage['woodlandValue']
    this.lAsian = localStorage['asianValue']
    this.lSparx = localStorage['sparxValue']

    this.productService.brands(this.lPuma, this.lAddidas, this.lWoodland , this.lAsian, this.lSparx).subscribe((entites: Product[]) => {
      this.products = entites;
    })
  }
  view(id: String) {
    this.router.navigate(['/products', id]);
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
