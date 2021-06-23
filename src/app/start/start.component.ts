import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
 
 
    let textWrapper = document.querySelector('.c1');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.c1 .el',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el: any, i: number) => 100 * i
  }).add({
    targets: '.c1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  });

  }

}

