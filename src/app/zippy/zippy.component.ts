import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
   @Input('title') title:string = "Title";
   isSelected:boolean = false;
  constructor() { 
  }
  toggle(){
    this.isSelected = !this.isSelected;
  }

  ngOnInit(): void {
  }
}
