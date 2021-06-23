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
  view!: Libdetails[];
  
  
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

}
