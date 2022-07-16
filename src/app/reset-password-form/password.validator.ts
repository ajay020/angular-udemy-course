
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidator{
    static shouldExist(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(control.value !== '1234'){
                    resolve({shouldExist: true});
                }else{
                    reject(null);
                }
            }, 2000);
        })
    }

    static notEqual(control: AbstractControl): ValidationErrors | null{

        console.log(control.get("newPassword")?.value, control.get("confirmPassword")?.value)

        let newPassword = control.get("newPassword")?.value;
        let confirmPassword = control.get("confirmPassword")?.value;

        if(newPassword === confirmPassword){
            return null;
        }
        return {notEqual: true};
    }
}