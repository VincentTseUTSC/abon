import { Component, Input, ElementRef, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() class = '';
  @Input() openOn = 'hover';
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    $(this._el.nativeElement.children[0]).dropdown({
      on: this.openOn
    });
  }
}