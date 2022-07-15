import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

   @Input('appInputFormat') format : string; 

  constructor(private el: ElementRef) { 
      this.format = ""
  }

 @HostListener('focus') onFocus(){
    console.log('focus', this.el);
 }

  @HostListener('blur') onBlur(){
    console.log('blur');
    let value:string = this.el.nativeElement.value ;
    if(this.format === 'lowercase')
        this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
