import { ViewserviceService } from './../viewlibrarian/viewservice.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    pass!:string;
    user!:string;
    libuser!:string;
    libpass!:string;

    ngOnIt():void{


 }
 loginForm=new FormGroup({
  adminuser:new FormControl("",Validators.required),
  adminpass:new FormControl("",Validators.required),
  libuser:new FormControl("",Validators.required),
  libpass:new FormControl("",Validators.required)


})



 get adminuser(){return this.loginForm.get('adminuser')}

  constructor(private router:Router,private route:ActivatedRoute,private lib:ViewserviceService) {
   }
 /*get loginuser(){return this.loginForm.get('loginuser')}

   constructor(private router:Router,private route:ActivatedRoute,private lib:ViewserviceService){

   }*/


   libLogin():any{
     if(this.libuser=="lib" && this.libpass=="lib123") {
       console.log("lib added");
       this.router.navigate(["./libpage"],{relativeTo:this.route});
     }
   }



  adminLogin():any{
    if(this.user=="admin" && this.pass=="admin123")
    {
      console.log("added");
      this.router.navigate(["./adminpage"],{relativeTo:this.route});
    }


  }
}








