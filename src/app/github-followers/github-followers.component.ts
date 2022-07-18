import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

interface Follower{
    avatar_url:string,
    html_url:string,
    login:string 
}

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

    followers! : Follower[];

  constructor(private service: FollowerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({next: (followers) =>{
        console.log(followers);
        this.followers = <Follower[]>followers;
    }})
  }

}
