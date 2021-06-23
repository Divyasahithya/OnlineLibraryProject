<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrarianService } from './librarian.service';
import { addLibrarian } from './addlibrarian';
=======
import { LibrarianService } from './librarian.service';
import { AddbookComponent } from './../addbook/addbook.component';
import { addlibrarian } from './addlibrarian';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';



import { FormControl, FormGroup, Validators} from '@angular/forms';

>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
<<<<<<< HEAD

  addlibrarian:addLibrarian = new addLibrarian("","","","",0,"");
  message:any;
  constructor(private location: Location,private librarian:LibrarianService) { }
  loginForm=new FormGroup({
    pass:new FormControl('',Validators.required)
  })
  fnameForm=new FormGroup({
    finame:new FormControl('',Validators.required)
  })
  lnameForm=new FormGroup({
    liname:new FormControl('',Validators.required)
  })
  emailForm=new FormGroup({
    emailvalid:new FormControl('',Validators.required)
  })
  phoneForm=new FormGroup({
    phonevalid:new FormControl('',Validators.required)
  })
  get finame(){
    return this.fnameForm.get("finame")
  };
  get liname(){
    return this.lnameForm.get("liname")
  }
  get emailvalid() {
    return this.emailForm.get("emailvalid")
  }
  get pass(){
    return this.loginForm.get("pass")
  }
  get phonevalid() {
    return this.phoneForm.get("phonevalid")
  }
 
  ngOnInit(): void {
  }
 
 back(): void {
    this.location.back();
  }
 
=======
  addlibrarian:addlibrarian = new addlibrarian("","","","",'',"");
  message:any;
  constructor(private location: Location,private librarian:LibrarianService) { }
  wholeForm=new FormGroup({
    pass:new FormControl('',Validators.required),
    finame:new FormControl('',Validators.required),
    liname:new FormControl('',Validators.required),
    emailvalid:new FormControl('',Validators.required),
    phonevalid:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required)
  })


  get finame(){
    return this.wholeForm.get("finame")
  };
  get liname(){
    return this.wholeForm.get("liname")
  }
  get emailvalid() {
    return this.wholeForm.get("emailvalid")
  }
  get pass(){
    return this.wholeForm.get("pass")
  }
  get phonevalid() {
    return this.wholeForm.get("phonevalid")
  }
  get gender() {
    return this.wholeForm.get("gender")
  }
  ngOnInit(): void {
  }

 back(): void {
    this.location.back();
  }

>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
AddLibrarian(): void{
  let resp=this.librarian.Add(this.addlibrarian);
  resp.subscribe((data)=>this.message=data);
  alert("Librarian Added Successfully!!");
<<<<<<< HEAD
 
}
}


=======

}





}
>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
