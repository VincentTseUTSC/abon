import { Component, forwardRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableComponent),
      multi: true
    }
  ]
})
export class EditableComponent implements ControlValueAccessor {
  private _value: any;
  private _tmpVal: any;
  private onChange: (_:any) => void = () => {};
  private onTouch: () => void = () => {};
  popup = `
    <div class="ui action input" id="change_col">
      <input type="text">
      <button class="ui teal icon button">
        <i class="check icon"></i>
      </button>
    </div>`;
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    $(this._el.nativeElement.children[0]).popup({
      on: 'click',
      onShow: (ele) => {
        let self = this;
        $('#change_col input').val(this.value);
        $('#change_col button').off('click').on('click', function () {
          self.value = $('#change_col input').val();
          $(ele).popup('hide');
        });  
      },
    });
  }

  set value(v: any) {
    this._value = v;
    this.onChange(v);
  }

  get value(): any {
    return this._value;
  }

  set tmpVal(v: any) {
    this.tmpVal = v;
  }

  get tmpVal(): any {
    return this.tmpVal;
  }

  onBlur() {
    this.onTouch();
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

}