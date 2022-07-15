
import { Component } from '@angular/core';
// import { CoursesService } from './course/courses.service';

@Component({
    selector:"courses",
    template:`
    <input [(ngModel)] = "email"  (keyUp.ENTER)="onKeyUp()" />  
    <p>{{text | summary:10}}</p>
    <i class="bi" [class.bi-star]="!isSelected" [class.bi-star-fill]="isSelected" (click)="onClick()"   ></i>
        `
})

export class CoursesComponent{
 
    isSelected = false;
    starClass = "bi bi-star"
    email = "me@gmail.com";
    text = "You are your thoughts, so be careful what you bring in your head."
    onClick(){
        this.isSelected = !this.isSelected;
        this.starClass =  this.isSelected ? "bi bi-star-fill" : "bi bi-star"

    }
    onKeyUp(){
        console.log(this.email);
    }
}