import { Component, OnInit } from '@angular/core';
import { Libdetails } from './libdetails';
import { Location } from '@angular/common';
import { ViewserviceService } from './viewservice.service';
@Component({
  selector: 'app-viewlibrarian',
  templateUrl: './viewlibrarian.component.html',
  styleUrls: ['./viewlibrarian.component.css']
})
export class ViewlibrarianComponent implements OnInit {
  public view!: Libdetails[];
  message:any;
  
  
  constructor(private location:Location, private viewservice:ViewserviceService) { }
  
  ngOnInit(): void {
    this.listlibrarian();
  }
  back():void{
    this.location.back();
  }
  listlibrarian(){
    this.viewservice.getLibrarian().subscribe(
      data =>{
        this.view= data;
      }
    )
  }
  deletelibrarian(id:string){
    if(confirm("Are you sure to delete???"))
    {
    this.viewservice.deleteLibrarian(id).subscribe();
    alert("Librarian Deleted Successfully!!");
    this.listlibrarian();
  }
  }
  
}
