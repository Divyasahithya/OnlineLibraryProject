<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libdetails } from './libdetails';
import{map} from 'rxjs/operators';
=======
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { Libdetails } from './libdetails';
import{map} from 'rxjs/operators';
import { ViewlibrarianComponent } from './viewlibrarian.component';

>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {
private baseUrl="http://localhost:8080/api/librarians";
<<<<<<< HEAD

  constructor(private httpClient:HttpClient) { }
=======
lib:Libdetails[]=[];
 
private baseurl1="http://localhost:8080/api/librarians/search/findById?id=$(id)";
 constructor(private httpClient:HttpClient) { }
  
>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
getLibrarian():Observable<Libdetails[]>{
 
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.librarians)
  );
}
<<<<<<< HEAD
=======


public deleteLibrarian(id:string) {

  return this.httpClient.delete(this.baseUrl +"/"+id);
}
>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
}
interface GetResponse{
  _embedded:{
    librarians:Libdetails[];
<<<<<<< HEAD
  }
}
=======
  }}
  

>>>>>>> f971f2824d17b484dc3da89a523e5779c1c35059
