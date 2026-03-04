import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[isChicken]',
  standalone: false,
})
export class IsChicken  implements OnInit{

  constructor(private tempRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }
@Input()
isChicken:string='';

  ngOnInit(){
     if(this.isChicken.toLowerCase().includes('кур')){
       this.viewContainer.createEmbeddedView(this.tempRef);
     } else {
       this.viewContainer.clear();
     }
  }
  // set isChicken(description:string){
  //  if(description.toLowerCase().includes('кур')){
  //    this.viewContainer.createEmbeddedView(this.tempRef);
  //  } else {
  //    this.viewContainer.clear();
  //  }
// }
}
