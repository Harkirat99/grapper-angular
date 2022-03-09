import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  lMen: String = ''
  lWomen: String = ''
  lChild: String = ''
  puma: String = ''
  addidas: String = ''
  asian: String = ''
  woodland: String = ''
  sparx: String = ''
  products: Product[] = [];
  constructor(private productService: ProductsService, private router: Router) {
    this.loadCategory()
  }

  ngOnInit(): void {
  }
  loadCategory() {
    this.lMen = localStorage['menValue']
    this.lWomen = localStorage['womenValue']
    this.lChild = localStorage['childValue']
    this.productService.category(this.lMen, this.lWomen, this.lChild).subscribe((entites: Product[]) => {
      this.products = entites;
    })
    // console.log('ok')   
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
