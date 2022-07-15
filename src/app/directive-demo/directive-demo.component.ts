import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

    list = [];
    viewMode="map";
    users: any ;
    canSave=false;

    onLoadUsers(){
        this.users = [
            {id:1, name:"user1"},
            {id:2, name:"user2"},
            {id:3, name:"user3"}
        ];
    }

    onAdd(){
        this.users.push({id:4, name:"user4"});
    }

    onRemove(user:{id:number, name:string}){
        let index  = this.users.indexOf(user);
        this.users.splice(index, 1);
    }
    onUpdate(user:{index:number, name:string}){
        user.name = "updated";
    }

    //optimize dom updation, if data is not changed then it won't update dom.
    trackUser(index:number, user:{id:number, name:string}){
        return user ? user.id : undefined;
    }

}
