import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrarianService } from './librarian.service';
import { addLibrarian } from './addlibrarian';
@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

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
 
AddLibrarian(): void{
  let resp=this.librarian.Add(this.addlibrarian);
  resp.subscribe((data)=>this.message=data);
  alert("Librarian Added Successfully!!");
 
}
}


