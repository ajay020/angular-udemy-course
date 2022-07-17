import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { throwError, of, map, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError} from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Inject } from '@angular/core';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string ,private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.url)
         .pipe(map(val => val), catchError (this.handleError));;
  }

  create(resource:any){
    // return throwError(() => new AppError({msg: "something went wrong"}))

    return  this.httpClient.post(this.url, JSON.stringify(resource))
        .pipe(catchError( this.handleError))
  }

  update(resource: any){

    return   this.httpClient.patch(this.url+'/'+resource.id, JSON.stringify({title:"updated title"}))
           .pipe(catchError (this.handleError));
  }

  delete(id : any){
    // return throwError(() => new AppError({msg: "something went wrong"}))

    return  this.httpClient.delete(this.url+'/'+id)
        .pipe(catchError (this.handleError));
  }

  private handleError(error:Response){
    if(error.status === 404){
        console.log(error);
        return of(new NotFoundError(error.json()));
    }

    if(error.status === 400){
        return of(new BadInput(error.json()))
    }
    return of(new AppError(error.json()));
  }
}
