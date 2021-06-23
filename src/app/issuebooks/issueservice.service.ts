import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueserviceService {
  private baseUrl="http://localhost:8080/api/issueBooks";
  constructor(private HttpClient:HttpClient) {}
  public Add(addissuebook: any) {
    return this.HttpClient.post(this.baseUrl,addissuebook,{responseType:"text" as "json"});
  }
  
}
