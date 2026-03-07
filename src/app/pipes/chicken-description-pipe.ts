import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDescription',
  standalone: false,
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([кК]ур(?:иц|ин|о)[а-я]+)/g,(match:string)=>{
      return match.toUpperCase();
    });
  }

}
