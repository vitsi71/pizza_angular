import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper',
  standalone: false,
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordParts:string[]): string {
    let result=value;

    wordParts.forEach(item =>{
      result= result.replace(new RegExp('[А-Яа-я]*'+item+'[а-я]*','gi'),(match:string)=>{
        return match.toUpperCase();
    } );
    })
    return result;
  }

}
