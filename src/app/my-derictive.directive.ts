import { Directive , HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMyDerictive]'
})
export class MyDerictiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();

  }


  @HostListener('focus') onFocus(){
    console.log('On Focus');
  }


}
