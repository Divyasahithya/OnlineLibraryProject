import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Issuebooksview } from './issuebooksview';
@Injectable({
  providedIn: 'root'
})
export class ViewissueserviceService {
  private baseUrl="http://localhost:8080/api/issueBooks";
  constructor(private httpClient:HttpClient) { }
  getIssueBook():Observable<Issuebooksview[]>{
 
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.issueBooks)
    );
  }
}


interface GetResponse{
  _embedded:{
    issueBooks:Issuebooksview[];
  }
}
