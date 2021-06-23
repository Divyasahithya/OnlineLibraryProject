import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style , state } from '@angular/animations';
declare var anime: any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  username:string | undefined;
  password: string | undefined;
 
  constructor() { }
 

  ngOnInit(): void {
  }
  
  

  
  LogInUser(){
    if(this.username=="Admin" && this.password=="admin123")
    {alert("Welcome"+this.username);
   var routerLink="login";
  
     
  }
}

  
   
 
   
   }