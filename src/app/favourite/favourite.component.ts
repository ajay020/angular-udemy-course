import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})

export class FavouriteComponent implements OnInit {
   @Input('isFavourite') isSelected = false;
   @Output('change') click = new EventEmitter();

    onClick(){
        this.isSelected = !this.isSelected;
        this.click.emit({newValue: this.isSelected});
    }

    ngOnInit(): void {
        
    }
}

export interface FavouriteChangedEventArgs{
    newValue: boolean
  }