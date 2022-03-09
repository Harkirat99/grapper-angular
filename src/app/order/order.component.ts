import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Order } from '../order'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  subTotalLocal: number | undefined
  subTotalStorage: number | undefined
  redirecurl: string = ''
  sendemail: boolean = true
  sendsms: boolean = false
  webhooku: string = 'http://www.example.com/webhook/'
  allowrepeatedpayments: boolean = false
  order: Order = new Order({});

  paymentForm = new FormGroup({
    purpose: new FormControl(''),
    buyer_name: new FormControl(''),
    buyer_father_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    additional_number: new FormControl(''),
    landmark: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    street: new FormControl(''),
    pincode: new FormControl(''),
    // amount : new FormControl(''),
  });

  constructor(private paymentService: OrderService) {
    this.subTotalStorage = localStorage['cartComponentSubtoal']
  }
  ngOnInit(): void { }
  onSubmit() {
    this.redirecurl = 'http://www.example.com/redirect/'
    this.order.purpose = this.paymentForm.value.purpose;
    this.order.buyer_name = this.paymentForm.value.buyer_name;
    this.order.buyer_father_name = this.paymentForm.value.buyer_father_name;
    this.order.redirect_url = this.redirecurl
    this.order.email = this.paymentForm.value.email;
    this.order.phone = this.paymentForm.value.phone;
    this.order.additional_number = this.paymentForm.value.additional_number;
    this.order.amount = this.subTotalStorage;
    this.order.street = this.paymentForm.value.street;
    this.order.city = this.paymentForm.value.city;
    this.order.district = this.paymentForm.value.district;
    this.order.state = this.paymentForm.value.state;
    this.order.pincode = this.paymentForm.value.pincode;
    this.order.landmark = this.paymentForm.value.landmark;
    this.order.allow_repeated_payments = this.allowrepeatedpayments;
    this.order.send_email = this.sendemail;
    this.order.send_sms = this.sendsms
    this.order.webhook = this.webhooku
    this.paymentService.post(this.order).subscribe(
      res => {
        this.onSucess(res)
      }, err => {
        console.log(err)
      }
    )
  }
  onSucess(res: any) {
    if (res) {
      window.location.href = res
    }
    console.log(res)
    console.log('sucess')
  }
}