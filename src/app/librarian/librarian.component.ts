import { LibrarianService } from './librarian.service';
import { AddbookComponent } from './../addbook/addbook.component';
import { addlibrarian } from './addlibrarian';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';



import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ViewserviceService } from '../viewlibrarian/viewservice.service';
import { Libdetails } from '../viewlibrarian/libdetails';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  addlibrarian:addlibrarian = new addlibrarian("","","","","",'',"");
  message:any;
  librarians:Libdetails[]=[];
  constructor(private location: Location,private librarian:LibrarianService,private getlib:ViewserviceService) { }
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

AddLibrarian(): void{
  let flag=0;
  this.getlib.getLibrarian().subscribe(
    data =>{this.librarians=data}
  );
      for(let b of this.librarians){
      
        if(b.mail==this.addlibrarian.mail )
        {
           alert("This Librarian mail is already added!!Please give another Email");
            flag=1;
            break;
          }
      }
      if(flag==0){
      let resp=this.librarian.Add(this.addlibrarian);
      resp.subscribe((data)=>this.message=data);
      alert("Librarian Added Successfully!!");
      this.getlib.getLibrarian().subscribe(
        data =>{this.librarians=data}
      );}
this.wholeForm.reset();



}
}
