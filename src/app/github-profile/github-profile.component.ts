import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor( private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    console.log("GithubProfile onInit");
    

    // this.router.paramMap
    // .subscribe(params =>{
    //     console.log(params);
    //     const id = params.get('id');
    // })


    // another way to access params, but use this only when you are sure the current
    // component does not get destroyed.

    // let id  = this.router.snapshot.paramMap.get('id');
    // console.log(id);
  }

  submit(){
    console.log("submit");
    this.router.navigate(['/followers'], {
        queryParams:{
            page:1,
            order: "newest"
        }
    });
  }
}
