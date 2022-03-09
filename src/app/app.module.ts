import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import { CartComponent } from './cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrderComponent } from './order/order.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { TestComponent } from './test/test.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { PriceRangeComponent } from './price-range/price-range.component';
  import {FlexLayoutModule} from '@angular/flex-layout';
  import {MatSidenavModule} from '@angular/material/sidenav';
  import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
// import {NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [   
    AppComponent,  
    RegisterComponent,
    LoginComponent,   
    ProductsComponent,
    ProductComponent,
    CartComponent,
    OrderComponent,
    TestComponent,
    SearchComponent,
    CategoryComponent,
    PriceRangeComponent,
    HomeComponent,
    BrandComponent,
    CategoriesComponent,
    BrandsComponent,    
  ],
  imports: [
    // NgxImageZoomModule,
    MDBBootstrapModule,
    MatGridListModule,
    MatSidenavModule,
   FlexLayoutModule,    
    MatTreeModule,
    MatCheckboxModule,
    MatTabsModule,
    // MatCarouselModule,
    MatBadgeModule,
    MatSnackBarModule,
    NgbModule ,    
    ButtonsModule,
    NavbarModule,
    WavesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,   
   // MatCarouselModule.forRoot(),
    MatDividerModule,
    MatCarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
