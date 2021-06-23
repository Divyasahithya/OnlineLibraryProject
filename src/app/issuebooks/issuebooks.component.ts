import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IssueserviceService } from './issueservice.service';
import { issuebook } from './issuebook';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewbookserviceService } from '../viewbooks/viewbookservice.service';
import { Viewbooks } from '../viewbooks/viewbooks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
HttpErrorResponse

@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrls: ['./issuebooks.component.css']
})
export class IssuebooksComponent implements OnInit {
 book:Viewbooks[]=[];
  constructor(private location:Location,private booksissued:IssueserviceService,private bookservice:ViewbookserviceService) { }
  addissuebook:issuebook = new issuebook(0,"",0,"","","no");
  message:any;
  issuebook = new FormGroup(
    {
      Callno:new FormControl('',[Validators.required]),
      student:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required])
 
    }
  )
  get callno(){ 
    return this.issuebook.get('callno')?.value
  }
  get studentid(){ 
    return this.issuebook.get('studentid')?.value
  }
  get name(){ 
    return this.issuebook.get('name')?.value
  }
  get mobile(){ 
    return this.issuebook.get('mobile')?.value
  }

  ngOnInit(): void {
  }
back():void{
  this.location.back();
}
AddIssueBook(): void{
  let flag=0;
  this.bookservice.getBooks().subscribe(
    data =>{this.book=data}
  );
      for(let b of this.book){
      
        if(b.callno==this.addissuebook.callno)
        { 
        let resp=this.booksissued.Add(this.addissuebook);
       resp.subscribe((data)=>this.message=data);
       alert("Book Issued Successfully!!");
       flag=1;
        break;
        }
        
}
if(flag==0){
  alert("Invalid Callno!!!");
}
}}
