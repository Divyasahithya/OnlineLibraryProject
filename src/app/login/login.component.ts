import { Component, OnInit } from '@angular/core';

import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    pass!:string;
    user!:string;


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

   }

  constructor() {
   }



  adminLogin(): void{

    if(this.user=="admin" && this.pass=="admin123"){
      console.log("added");
    }


  }
}








