import { Component, OnInit } from '@angular/core';
import { Issuebooksview } from './issuebooksview';
import { Location } from '@angular/common';
import { ViewissueserviceService } from './viewissueservice.service';
@Component({
  selector: 'app-viewissuedbooks',
  templateUrl: './viewissuedbooks.component.html',
  styleUrls: ['./viewissuedbooks.component.css']
})
export class ViewissuedbooksComponent implements OnInit {
  view:Issuebooksview[]=[
    ];

  constructor(private location:Location, private viewissue:ViewissueserviceService) { }

  ngOnInit(): void {
    this.listissueBooks();
  }
  back(): void {
    this.location.back()
  }
  listissueBooks(){
    this.viewissue.getIssueBook().subscribe(
      data =>{
        this.view= data;
      }
    )
  }
 getisssuebook(){
   return this.view;
 }
}
