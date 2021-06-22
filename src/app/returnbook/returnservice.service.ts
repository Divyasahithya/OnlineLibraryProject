import { Injectable } from '@angular/core';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnserviceService {
 book: issuebook[]=[];
  constructor(private viewissue:ViewissueserviceService) { }
  returnbook(): issuebook[]{
    this.viewissue.getIssueBook().subscribe(
      data =>{this.book=data}
     
      )
      return this.book;
  }
}
