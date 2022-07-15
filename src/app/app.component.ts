import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    post = {
        title:"Title",
        isFavourite: true 
    }
    tweet = {
        isLiked: false,
        likesCount: 10
    }

    onChangeFavourite(favouriteArgs: FavouriteChangedEventArgs){
        console.log("Favourite changed", favouriteArgs);
    }
}
