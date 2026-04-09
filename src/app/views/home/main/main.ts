import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {from, map, Observable, Subject, Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Popup} from '../../../shared/components/popup/popup';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit,OnDestroy, AfterViewInit{


  protected readonly title = signal('Pizza');

  private subscription:Subscription|null=null;
// private observable:Observable<number>;
private subject:Subject<number>;
// private promise:Promise<string>;
  private modalService = inject(NgbModal);


  constructor() {

//     this.observable=from([1,2,3,4,5]);
//
//    // this.promise = new Promise<string>(resolve =>{
//    //    setTimeout(()=>{
//    //      resolve('hello');
//    //    },2000);
//    //  })
//

    this.subject=new Subject<number>(); // для единого для всех потока
    let count=0;
    const interval= setInterval(()=>{
      this.subject.next(count++); // генерирует событие при помощи .next
    },1000);

    const timeout1 = setTimeout(()=>{
      this.subject.complete(); // генерирует событие при помощи .complete, прекращает работу observer (просто без ошибки)
    },4000);


//     this.observable = new Observable((observer) =>{
//       let count=0;
//      const interval= setInterval(()=>{
//         observer.next(count++); // генерирует событие при помощи .next
//       },1000);
//
//       const timeout1 = setTimeout(()=>{
//         observer.complete(); // генерирует событие при помощи .complete, прекращает работу observer (просто без ошибки)
//       },4000);
//
//       const timeout2 = setTimeout(()=>{
//         observer.error(' world'); // генерирует событие при помощи .error, выводит ошибку, прерывает .next
//       },5000);
//
//       return{
//         unsubscribe() {// при удалении подписки останавливаем интервалы и таймауты
// clearInterval(interval);
// clearTimeout(timeout1);
// clearTimeout(timeout2);
//         }
//       }
//     });
  }

  @ViewChild(Popup)
  private popup!:Popup;

ngOnInit() {

  console.log(environment)
  // const myModalAlternative = new bootstrap.Modal('#myModal', {})
  // myModalAlternative.show();

  // this.subscription= this.observable
  this.subscription= this.subject

    .subscribe(// подписывается на событие с помощью .subscribe
    {
      next: (param: number) => { //обработчик события next
        console.log('subscriber 1: ', param)
      },
      error: (error: string) => {// обработчик ошибок
        console.log('ERROR!!! '+error);
      }
    }
  );

  // this.observable.subscribe((param:number)=>{ // подписывается на событие с помощью .subscribe
  //   console.log('subscriber 1: ',param)
  // })
  // this.promise.then((param:string)=>{ // подписывается на событие с помощью .subscribe
  //   console.log(param)
  // })

}

  ngAfterViewInit() {
  this.popup.open();

    // const modalRef = this.modalService.open(Popup);
    // modalRef.componentInstance.data = 'Main component';

    // this.modalService.open(this.popup, {});
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe() // отписаться от подписки
  }


  test(){

    // this.observable
    this.subject
      .pipe( // обрабатываем входные данные и преобразоваваем в строки
        map((number)=>{
          return "Число " + number;
        })
      )
      .subscribe((param:string)=>{ // подписывается на событие с помощью .subscribe
      console.log('subscriber 2: ',param)
    })
  }


  // public scrollTo(target: HTMLElement): void {
  //   target.scrollIntoView({behavior: "smooth"});
  // }
  //




}
