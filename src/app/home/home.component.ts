import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    list  = [
        {year: 2021, month:1},
        {year: 2022, month:3},
        {year: 2024, month:4},
    ]

  constructor() { }

  ngOnInit() {
  }
}
