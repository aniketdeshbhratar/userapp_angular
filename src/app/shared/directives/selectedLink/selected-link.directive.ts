import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectedLink]'
})
export class SelectedLinkDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    //get all links from table head
    const links = Array.from(this.element.nativeElement.parentNode.parentElement.querySelectorAll('a.selector'));

    // remove selected class from every link
    links.forEach(link => {
      this.renderer.removeClass(link,'selected')
    });

    //add selected class to selected link
    this.renderer.addClass(this.element.nativeElement,'selected')
  }
}
