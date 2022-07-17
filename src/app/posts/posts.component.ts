import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

    posts :Post[] = [] ;

  constructor(private service: PostService) { }

 /* ngOnInit is life cyclce hook of the component. 
    We shold call api services in this method rather than constructor. 
    This method is called by angular when the component is created.
 */

  /**   Sepration of concern
   *    Each class should be responsible for a specific task.
   * 
   *  */  


  ngOnInit(): void {
      //fetch posts from server
      this.service.getAll()
      .subscribe({
        next: posts =>{
          this.posts = <Post[]>posts;
        }})    
  }

  addPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    this.posts.splice(0,0, post);

    input.value='';

    this.service.create(post)
        .subscribe({
           next: response =>{
                post['id'] = {...post, ...response};
                // console.log(response)
            },
           error: (error: AppError) => {
                this.posts.splice(0,1);

                if(error instanceof BadInput){
                    // this.form.setErrors(error.json())
                }else{
                    throw error; 
                }
          }});
  }

  updatePost(post: Post){

    this.service.update(post)
        .subscribe({
            next: updatedPost =>{
                console.log(updatedPost);
            }
        });
  }
  
  deletePost(post: Post){
    // delete post immediately with optimistic approach.
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

   this.service.delete(post.id)
        .subscribe({
           next: response =>{
                    console.log(response);
           }, 
           error:(error:AppError) => {
                    // rollback deleted post.
                    this.posts.splice(index, 0 , post);

                    if(error instanceof NotFoundError)
                        alert("This post has already been deleted.");
                    else{
                        throw error; 
                    }
            }})
  }
}
/**
 * Optimistic and Pessimistic updates
 * 
 *  Optimistic updates makes user experience smooth. Ans most of the modern app use this 
 *  approach.
 */