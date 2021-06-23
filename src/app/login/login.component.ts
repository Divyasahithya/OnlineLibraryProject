<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
=======
import { ViewserviceService } from './../viewlibrarian/viewservice.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
import { Libdetails } from '../viewlibrarian/libdetails';
>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
<<<<<<< HEAD
  aduser="";
  adpass="";
  ngOnIt():void{
    
=======

    pass!:string;
    user!:string;
    Libuser!:string;
    Libpass!:string;
    librarian:Libdetails[]=[];
    ngOnIt():void{


>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
 }
 loginForm=new FormGroup({
  adminuser:new FormControl("",Validators.required),
  adminpass:new FormControl("",Validators.required),
  libuser:new FormControl("",Validators.required),
  libpass:new FormControl("",Validators.required)


})
<<<<<<< HEAD
 
  
 get adminuser(){return this.loginForm.get('adminuser')}
   valid(): void{
     if(this.aduser=="admin" && this.adpass=="admin123")
     alert("Login Successful!!")
   }
  constructor() {
   }
   
 }






 
=======



 get adminuser(){return this.loginForm.get('adminuser')}

  constructor(private router:Router,private route:ActivatedRoute,private lib:ViewserviceService) {
   }



  adminLogin():any{
    if(this.user=="admin" && this.pass=="admin123")
    {
     this.router.navigate(["./adminpage"],{ relativeTo: this.route });
    }
    else{
      alert("Invalid Username  or Password!!")

    }


  }
  LibLogin(): void{
    let flag=0;
    this.lib.getLibrarian().subscribe(
       data =>{this.librarian=data}
     )
     console.log(this.Libuser + this.Libpass);
     for(let libr of this.librarian){
     if(this.Libuser==(libr.fname) && this.Libpass==libr.password){
       flag=1;
      
       this.router.navigate(['./libpage'],{ relativeTo: this.route });
       break;
     }}
     if(flag==0){
      alert("Invalid Username  or Password!!")
    }
 
   }
}








>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
