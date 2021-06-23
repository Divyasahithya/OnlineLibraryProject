import { Component, OnInit } from '@angular/core';

import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  aduser="";
  adpass="";
  ngOnIt():void{
    
 }
 loginForm=new FormGroup({
  adminuser:new FormControl("",Validators.required),
  adminpass:new FormControl("",Validators.required),
  libuser:new FormControl("",Validators.required),
  libpass:new FormControl("",Validators.required)


})
 
  
 get adminuser(){return this.loginForm.get('adminuser')}
   valid(): void{
     if(this.aduser=="admin" && this.adpass=="admin123")
     alert("Login Successful!!")
   }
  constructor() {
   }
   
 }






 
