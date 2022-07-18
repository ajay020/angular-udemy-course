import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.css']
})
export class ArchiveDetailsComponent implements OnInit {

    year: string;
    month: string;
  constructor(private router: ActivatedRoute, private route: Router ){ }

  ngOnInit(): void {
    let  params = this.router.snapshot.paramMap;
    this.year =  params.get("year");
    this.month =  params.get("month");
  }

  viewAll(){
    this.route.navigate(["/"])
  }

}
