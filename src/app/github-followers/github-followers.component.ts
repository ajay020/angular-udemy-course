import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import {switchMap} from 'rxjs/operators'

interface Follower{
    avatar_url:string,
    html_url:string,
    login:string ,
    id:string 
}

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

    followers! : Follower[];

  constructor(private router: ActivatedRoute ,private service: FollowerService) { }

  ngOnInit(): void {

   combineLatest([
        this.router.paramMap,
        this.router.queryParamMap
    ])
    .pipe(switchMap(combined =>{
        let id = combined[0].get("id");
        let page = combined[1].get('page');
        // this.service.getAll({id, page});
        return  this.service.getAll();
    }))
    .subscribe(followers =>  this.followers = <any>followers )
  }
}
