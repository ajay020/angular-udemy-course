import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isLiked') isSelected: boolean = false;
  @Input('likesCount') likesCount: number = 0;

   onClick(){
    this.isSelected = !this.isSelected;
    this.likesCount +=  this.isSelected ? 1 : -1;
   }

  ngOnInit(): void {
  }

}
