import { Component, OnInit } from '@angular/core';
import { Libdetails } from './libdetails';
import { Location } from '@angular/common';
import { ViewserviceService } from './viewservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatelibrarianComponent } from '../updatelibrarian/updatelibrarian.component';
import { UpdateserviceService } from '../updatelibrarian/updateservice.service';
import { addlibrarian } from '../librarian/addlibrarian';
@Component({
  selector: 'app-viewlibrarian',
  templateUrl: './viewlibrarian.component.html',
  styleUrls: ['./viewlibrarian.component.css']
})
export class ViewlibrarianComponent implements OnInit {
  public view!: Libdetails[];
  message:any;
  
  
  constructor(private location:Location,private router:Router,private route:ActivatedRoute, private viewservice:ViewserviceService,private update:UpdateserviceService) { }
  
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
  updatelibrarian(b:addlibrarian){
  this.update.setval(b);
  this.router.navigate(['./update'],{ relativeTo: this.route });
  

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
