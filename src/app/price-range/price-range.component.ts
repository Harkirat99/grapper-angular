import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import{ AuthserviceService} from '../authservice.service';
import { Product } from '../products';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent implements OnInit {
  miniValue: number = 0 
  maxiValue: number = 0
  products: Product[] = [];
  _id: string = ''
  puma: String = ''
 addidas: String = ''
 asian: String = ''
 woodland: String = ''
 sparx: String = ''
  constructor(private productService: ProductsService, private router: Router,
    public authService: AuthserviceService) {
   }

  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(){
    this.miniValue= localStorage['miniPrice']
    this.maxiValue= localStorage['maxiPrice']

    this.productService.filterPrice(this.miniValue,this.maxiValue).subscribe((entites: Product[]) => {
      this.products = entites ;
    })
    // this.productService.search().subscribe((entites: Product[]) => {
    //   this.products = entites;
    // })
  }
  view(id:String){
    this.router.navigate(['/products',id]);
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
