import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { Libdetails } from './libdetails';
import{map} from 'rxjs/operators';
import { ViewlibrarianComponent } from './viewlibrarian.component';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {
private baseUrl="http://localhost:8080/api/librarians";
lib:Libdetails[]=[];
 
private baseurl1="http://localhost:8080/api/librarians/search/findById?id=$(id)";
 constructor(private httpClient:HttpClient) { }
  
getLibrarian():Observable<Libdetails[]>{
 
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.librarians)
  );
}


public deleteLibrarian(id:number) {

  return this.httpClient.delete(this.baseUrl +"/"+id );
}
}
interface GetResponse{
  _embedded:{
    librarians:Libdetails[];
  }}
  

