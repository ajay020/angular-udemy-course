import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent  {

    form = new FormGroup({
        oldPassword: new FormControl(
            '',
            [Validators.required],
            PasswordValidator.shouldExist),
        newPassword : new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]) ,
    }, {validators: PasswordValidator.notEqual})


    get oldPassword(){
        return this.form.get('oldPassword')
    }
    get newPassword(){
        return this.form.get('newPassword')
    }
    get confirmPassword(){
        return this.form.get('confirmPassword')
    }
}