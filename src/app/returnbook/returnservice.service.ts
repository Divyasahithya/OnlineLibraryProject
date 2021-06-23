import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { issuebook } from '../issuebooks/issuebook';
import { Viewbooks } from '../viewbooks/viewbooks';
import { ViewbookserviceService } from '../viewbooks/viewbookservice.service';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
@Injectable({
  providedIn: 'root'
})
export class ReturnserviceService {
  [x: string]: any;
 Issuebook: issuebook[]=[];
 book:Viewbooks[]=[];
 private baseUrl="http://localhost:8080/api/issueBooks";
  constructor(private viewissue:ViewissueserviceService,private httpClient:HttpClient, private viewbook:ViewbookserviceService) { }
  returnissuebook(): issuebook[]{
    this.viewissue.getIssueBook().subscribe(
      data =>{this.Issuebook=data}
     )
      return this.Issuebook;
  }
  returnbook(): Viewbooks[]{
    this.viewbook.getBooks().subscribe(
      data =>{this.book=data}
     )
      return this.book;

  }
  Find(callno:string){
    for(let item of this.book){
      if(item.callno==callno)
      {
        item.quantity+=1;
        item.issued-=1;
        this.updateQuan(item);
      }
    }
  }
  updateStatus(b:issuebook): Observable<void> {
    return this.httpClient.put<void>(this.baseUrl +"/"+b.ID, b)
    }
    updateQuan(b:Viewbooks): Observable<void> {

      return this.httpClient.put<void>(this.baseUrl +"/"+b.ID, b)
      }
}


