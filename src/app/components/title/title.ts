import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'custom-title',
  standalone: false,
  templateUrl: './title.html',
  styleUrl: './title.scss',
})

export class Title {

  @Input() title:string="";

  toUpper(){
    return this.title.toUpperCase();
  }
  toLower(){
    return this.title.toLowerCase();
  }

}
