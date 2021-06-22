import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
import { ReturnserviceService } from './returnservice.service';
@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
 callno!:string;
 studentid!: number;

 book!:issuebook[];
  constructor(private location:Location,private returnBook:ReturnserviceService) { 
   
  }

  ngOnInit(): void {
    
  }
back():void{
  this.location.back();
  
}
return():void
  { let flag=0;
    this.book=this.returnBook.returnbook();
      for(let b of this.book){
        if(b.callno==this.callno && b.stu_id==this.studentid)
        { 
           flag=1;
           break;
      } }
      if(flag=0)
      {
        alert("Invalid callno or studentid");
      }
      else{
        alert("Book Returned Successfully!!");
      }
  }
}
