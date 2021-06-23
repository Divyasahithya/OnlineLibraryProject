import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-libpage',
  templateUrl: './libpage.component.html',
  styleUrls: ['./libpage.component.css']
})
export class LibpageComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
back():void{
  this.location.back();
}
}
