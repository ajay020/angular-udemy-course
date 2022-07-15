import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string,): unknown {
    if(!value) return null;
    let words = value.split(' ');
    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(i > 0 && this.isPreposition(word)){
             words[i] = word.toLocaleLowerCase();
        }else{
            words[i] = this.toTitleCase(word);
        }
    }
    return words.join(" ");
  }

  toTitleCase(word:string){
      return word.substr(0,1).toUpperCase() + word.substr(1).toLocaleLowerCase();
  }

  isPreposition(word:string){
    const prpositions = ["of", "the", "an", "a", "in"];
    if( prpositions.includes(word.toLocaleLowerCase())){
        return true;
    }
    return false;
  }

}
