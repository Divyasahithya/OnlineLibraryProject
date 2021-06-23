<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { issuebook } from '../issuebooks/issuebook';
import { ViewissueserviceService } from '../viewissuedbooks/viewissueservice.service';
>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059

@Injectable({
  providedIn: 'root'
})
export class ReturnserviceService {
<<<<<<< HEAD

  constructor() { }
}
=======
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
    return this.httpClient.put<void>(this.baseUrl +"/"+b.dummy, b)
     
  }
}


>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
