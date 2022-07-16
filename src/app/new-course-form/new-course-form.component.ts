import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

    form = new FormGroup({
        topics: new FormArray([])
    })

//------------------------------------------------------------
    form2 = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl() 
        }),
        topics: new FormArray([])
    })

    // another way to create forms is using formbuilder.

    constructor(fb: FormBuilder){
        fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email:[],
                phone:[] 
            }),
            topics: fb.array([]) 
        })
    }

// ----------------------------------------------------------------------
    addTopic(topic:HTMLInputElement){
        this.topics.push(new FormControl(topic.value))
        topic.value = '';
        // console.log(topic);
    }

    removeTopic(topic: AbstractControl){
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index); 
    }

    get topics(){
        return this.form.get('topics') as FormArray;
    }

}
