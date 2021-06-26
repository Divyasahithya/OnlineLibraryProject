import { Component, OnInit } from '@angular/core';
import { Location, NgIf } from '@angular/common'
import { addbook } from './addbook';
import { AddserviceService } from './addservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewbookserviceService } from '../viewbooks/viewbookservice.service';
import { Viewbooks } from '../viewbooks/viewbooks';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
   addbook:addbook =new addbook("","","","",0,0,"");
   message:any;
   book:Viewbooks[]=[];
   addbookForm= new FormGroup({
    Callno: new FormControl('', [Validators.required,Validators.minLength(3)]),
    Name: new FormControl('', Validators.required),
    Author: new FormControl('', Validators.required),
    Publisher: new FormControl('', Validators.required),
    Quantity: new FormControl('', Validators.required)
  })
get callno(){ 
  return this.addbookForm.get('callno')?.value
}
get name(){ 
  return this.addbookForm.get('name')?.value
}
get author(){ 
  return this.addbookForm.get('author')?.value
}
get publisher(){ 
  return this.addbookForm.get('publisher')?.value
}
get quantity(){ 
  return this.addbookForm.get('quantity')?.value
}
 
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
   
  }
  constructor(private location: Location,private addservice:AddserviceService, private viewbook:ViewbookserviceService) { }

  ngOnInit(): void {
  }
back():void{
  this.location.back();
}
AddBook(): void{
  let flag=0;
  this.viewbook.getBooks().subscribe(
    data =>{this.book=data}
  );
      for(let b of this.book){
      
        if(b.callno==this.addbook.callno )
        {
           alert("This book is already added!!Please give another callno");
            flag=1;
            break;
          }
      }
      if(flag==0){
 let resp= this.addservice.Add(this.addbook);
  resp.subscribe((data)=>this.message=data);
  alert("Book Added Successfully!!!");
  this.viewbook.getBooks().subscribe(
    data =>{this.book=data}
  );
      }
  this.addbookForm.reset();
  
}

}

