import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { User } from '../user';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


import { Router } from '@angular/router';
import{ AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
  id: string = ''
  search: String = ''
 men: String = ''
 women: String = ''
 child: String = ''
userE:any
minimumPrice: Number | undefined
maximumPrice: Number | undefined
 category: String = ''
 user: User = new User({});

  
  products: Product[] = [];
  

  constructor(private productService: ProductsService, private router: Router,
    public authService: AuthserviceService) {
      
  }

   
  ngOnInit(): void {
    this.getData()
    // this.userdetail()
  

  }
 
  getData() {
    this.productService.search().subscribe((entites: Product[]) => {
      this.products = entites;
    })
  }

  test(){
    console.log('works')
  }

  view(id:string){
    this.router.navigate(['products',id]);
    }

    onSearch(){
      localStorage['searchValue'] = this.search
      this.router.navigate(['search'])
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
    getCategory(){
      localStorage['menValue'] = this.men
      localStorage['womenValue'] = this.women
      localStorage['childValue'] = this.child
      this.router.navigate(['category'])
    }

    priceRange(){
      localStorage['miniPrice'] = this.minimumPrice
      localStorage['maxiPrice'] = this.maximumPrice
      this.router.navigate(['filterPrice'])
    }

    slides = [{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'},
     {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'},
      {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

    
    // userdetail(){
    //    this.userE= localStorage['userEmailValue'];
    //    this.authService.find(this.userE).subscribe((entity: User)=>{
    //       this.user =  new User(entity)
    //    })
    //   //  console.log(this.user.name)
    // }
}

       