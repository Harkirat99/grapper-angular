import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id: string = ''
  minimumPrice: Number | undefined
  maximumPrice: Number | undefined
  categoriesValue: string = ''
  products: Product[] = [];
  men: String = ''
 women: String = ''
 child: String = ''
 puma: String = ''
 addidas: String = ''
 asian: String = ''
 woodland: String = ''
 sparx: String = ''

  constructor(private productService: ProductsService, private router: Router) {
    this.loadCategories()
  }


  ngOnInit(): void {
  }


  loadCategories() {
    this.categoriesValue = localStorage['cate-value'];
    this.productService.categories(this.categoriesValue).subscribe((entites: Product[]) => {
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

    cMen(e:any){
      if(e.checked){ 
         this.men='Men'
      }  
     if(!e.checked){ 
        this.men=''
     }
    }
    cWomen(e:any){
      if(e.checked){ 
         this.women='Women'
      }
      if(!e.checked){ 
        this.women=''
     }
    }
    cChild(e:any){
      if(e.checked){ 
         this.child='Child'
      }
      if(!e.checked){ 
        this.child=''
     }
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

    getCategory(){
      localStorage['menValue'] = this.men
      localStorage['womenValue'] = this.women
      localStorage['childValue'] = this.child
      this.router.navigate(['category'])
    }

    

}
