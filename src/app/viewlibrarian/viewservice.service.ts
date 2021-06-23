import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libdetails } from './libdetails';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {
private baseUrl="http://localhost:8080/api/librarians";

  constructor(private httpClient:HttpClient) { }
getLibrarian():Observable<Libdetails[]>{
 
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.librarians)
  );
}
}
interface GetResponse{
  _embedded:{
    librarians:Libdetails[];
  }
}
