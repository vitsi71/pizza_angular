import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {Popup} from '../../../shared/components/popup/popup';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit{

  private modalService = inject(NgbModal);

  @ViewChild(Popup)
  private popup!:Popup;

  ngAfterViewInit() {
    this.popup.open();
  }
}
