import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  location:any[]=[];
  
  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.authService.getLocation().subscribe(rs=>{
      this.location=rs;
    })

    this.loginForm=new FormGroup({
      username:new FormControl(null,{validators:[Validators.required]}),
      password:new FormControl(null,{validators:[Validators.required]}),
      location:new FormControl("",{validators:[Validators.required]})
    })
   

  }

  f(control){
    return this.loginForm.get(control);
  }

  submitLogin(){
    let loginData = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
    console.log(loginData);
    this.authService.login(loginData);
  }

  
}
