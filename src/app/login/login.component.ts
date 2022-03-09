import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../user'
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service'
   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = new User({});   
  loginForm: FormGroup
  userEmail:any
  userPass:any
  userId:string=''
  // userValue:string = ''
  constructor(private http: HttpClient, private fb: FormBuilder,
    private auth: AuthserviceService,
    // private loginService: LoginService,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }


  login() {
    // console.log(this.userEmail)
    this.user.email = this.loginForm.get('email')?.value
    this.user.password = this.loginForm.get('password')?.value

    this.auth.login(this.user).subscribe(res => {
      if (res) {
        console.log(res)
        this.router.navigate(['home'])
       this.auth.setLoggedIn(true)
      } else {
        console.log("Error")
      }
     if(this.auth.isLoggedIn=true){
           // userdetail(){
       this.auth.find(this.user).subscribe((entity: User)=>{
          this.user =  new User(entity)
          // console.log(this.user.id)
       localStorage['userid']= this.user.id 
          
       })
      //  console.log(this.user.name)
    // }
      //  localStorage['userEmailValue']=this.user.email   
      //  console.log('yes you are')

     }
    }
 
    )

  }
  registr() {
    this.router.navigate(['register'])
  }
}
