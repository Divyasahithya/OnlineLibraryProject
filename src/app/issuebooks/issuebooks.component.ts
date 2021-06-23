import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IssueserviceService } from './issueservice.service';
import { issuebook } from './issuebook';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
HttpErrorResponse

@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrls: ['./issuebooks.component.css']
})
export class IssuebooksComponent implements OnInit {

  constructor(private location:Location,private booksissued:IssueserviceService) { }
  addissuebook:issuebook = new issuebook("",0,"",0);
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
    return this.issuebook.get('publisher')?.value
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    
  }

  ngOnInit(): void {
  }
back():void{
  this.location.back();
}
AddIssueBook(): void{
  let resp=this.booksissued.Add(this.addissuebook);
  resp.subscribe((data)=>this.message=data);
  alert("Book Issued Successfully!!");
 
}
}
