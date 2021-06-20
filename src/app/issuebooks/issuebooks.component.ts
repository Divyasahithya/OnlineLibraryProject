import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IssueserviceService } from './issueservice.service';
import { issuebook } from './issuebook';
import { HttpErrorResponse } from '@angular/common/http';
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
