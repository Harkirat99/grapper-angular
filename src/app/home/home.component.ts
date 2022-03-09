import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brand1value: string = '';
  categoryValue: string = ''
  id: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  slides = [
  { 'image': 'http://localhost:9090/download/grapper-crousel-1.jpg' },
  { 'image': 'http://localhost:9090/download/grapper-crousel-2.jpg' },
  { 'image': 'http://localhost:9090/download/grapper-crousel-3.jpg' },
  { 'image': 'http://localhost:9090/download/grapper-crousel-4.jpg' }];

  brand1() {
    this.brand1value = "Addidas";         
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  brand2() {
    this.brand1value = "Puma";
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  brand3() {
    this.brand1value = "Redtape";
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  brand4() {
    this.brand1value = "Asian";
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  brand5() {
    this.brand1value = "Sparx";
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  brand6() {   
    this.brand1value = "Bata";
    localStorage['brand1value'] = this.brand1value
    this.router.navigate(['/brand'])
  }
  category1() {
    this.categoryValue = "Casuals"
    localStorage['cate-value'] = this.categoryValue
    this.router.navigate(['/categories'])
  }

  category2() {
    this.categoryValue = "Sports"
    localStorage['cate-value'] = this.categoryValue
    this.router.navigate(['/categories'])

  }

  category3() {
    this.categoryValue = "Sandals"
    localStorage['cate-value'] = this.categoryValue
    this.router.navigate(['/categories'])

  }

  category4() {
    this.categoryValue = "Formal"
    localStorage['cate-value'] = this.categoryValue
    this.router.navigate(['/categories'])
  }
  topPics1(){
    this.id = "62067a54b8433202085d2640"
    this.router.navigate(['products', this.id]);
  }
  topPics2(){
    this.id = "62067df8b8433202085d2652"
    this.router.navigate(['products', this.id]);
  }
  topPics3(){
    this.id = "620751cb569e671994ddc8d3"
    this.router.navigate(['products', this.id]);
  }
  trending1(){
    this.id = "620665319bbee01600cb3d90"
    this.router.navigate(['products', this.id]);
  }
  trending2(){
    this.id = "620674c3b8433202085d2620"
    this.router.navigate(['products', this.id]);
  }
  trending3(){
    this.id = "62068485b8433202085d2676"
    this.router.navigate(['products', this.id]);
  }
  bestInCategory1(){
    this.id = "620687e2b8433202085d268d"
    this.router.navigate(['products', this.id]);
  }
  bestInCategory2(){
    this.id = "62068f18b8433202085d26bc"
    this.router.navigate(['products', this.id]);
  }
  bestInCategory3(){
    this.id = "620691e7b8433202085d26cd"
    this.router.navigate(['products', this.id]);
  }
}

