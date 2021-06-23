import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
import { ReturnserviceService } from './returnservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
 callno!:string;
 Studentid!: number;
 returnForm = new FormGroup(
  {
    Callno:new FormControl('',[Validators.required]),
    studentid:new FormControl('',[Validators.required]),
  })
 book!:issuebook[];
 get Callno(){ 
  return this.returnForm.get('Callno')?.value
}
get studentid(){ 
  return this.returnForm.get('studentid')?.value
}
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
           b.returnstatus="yes";
           alert("Book Returned Successfully!!");
           this.returnBook.updateStatus(b).subscribe();
           break;
      } }
      if(flag==0)
      {
        alert("Invalid callno or studentid");
      }
      else{
       
      }
  }
}
