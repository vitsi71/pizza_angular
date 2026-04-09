import {Component, ElementRef, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.html',
})
export class Popup {

  private modalService = inject(NgbModal);

  @ViewChild('popup')
  popup!:TemplateRef<ElementRef>;

 @Input() data:string='';

 open():void{
   this.modalService.open(this.popup);

 }

}
