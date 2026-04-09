import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]',
  standalone:false
})
class CoolInput implements OnInit{

  constructor(private el:ElementRef,
              private rend:Renderer2,) {

  }

  @Input() coolInputDefaultBgColor:string='white';
  @Input() coolInputFocusBgColor:string='orange';



  private _isOnFocus:boolean=false;
  @HostBinding('class.isOnFocus')
get getIsOnFocus(){
    return this._isOnFocus;
  }
  private _bgColor:string='';
  @HostBinding('style.background-color')
get getBgColor(){
    return this._bgColor;
  }


  @HostListener('focus')
  onFocus(){
    // this.rend.setStyle(this.el.nativeElement,'backgroundColor','orange');
    this.changeElementBgColor(this.coolInputFocusBgColor);
    this._isOnFocus=true;
  }

  @HostListener('blur')
  onBlur(){
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    this._isOnFocus=false;
  }

  @HostListener('click', ['$event' ,'$event.target'])

  onClick(event:Event,target:any){
    console.log(event);
    console.log(target);
  }

  ngOnInit()
{
  this.changeElementBgColor(this.coolInputDefaultBgColor);
  this.rend.setAttribute(this.el.nativeElement,'placeholder',this.el.nativeElement.getAttribute('placeholder')+'*');

// const text=this.rend.createElement('span');
// this.rend.setProperty(text,'innerText','* Обязательно для заполнения');
// this.rend.setStyle(text,'color','red');
// this.rend.insertBefore(this.el.nativeElement.parentElement,text, this.rend.nextSibling(this.el.nativeElement));
}

changeElementBgColor(color:string){
    this._bgColor=color;
  // this.rend.setStyle(this.el.nativeElement,'backgroundColor',color);
}

}

export default CoolInput
