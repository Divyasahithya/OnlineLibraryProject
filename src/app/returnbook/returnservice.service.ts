import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnserviceService {
  [x: string]: any;
 book: issuebook[]=[];
 private baseUrl="http://localhost:8080/api/issueBooks";
  constructor(private viewissue:ViewissueserviceService,private httpClient:HttpClient) { }
  returnbook(): issuebook[]{
    this.viewissue.getIssueBook().subscribe(
      data =>{this.book=data}
     
      )
      return this.book;
  }
  updateStatus(b:issuebook): Observable<void> {
    return this.httpClient.put<void>(this.baseUrl, b,{headers: new HttpHeaders({'Content-Type':'application/json'})})
      .pipe(
        catchError(this.handleError('update', b))
      );
  }
}
function httpOptions<T>(heroesUrl: any, b: any, httpOptions: any) {
  throw new Error('Function not implemented.');
}

