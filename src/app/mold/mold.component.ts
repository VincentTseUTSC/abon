import { Component, HostListener, ViewChild,OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import * as $ from 'jquery';

// import { ActivatedRoute } from '@angular/router';
import { MoldService } from './mold.service';

@Component({
  selector: 'mold',
  templateUrl: './mold.component.html',
  styleUrls: ['./mold.component.css']
})
export class MoldComponent {

	constructor(private _testAPI: MoldService) {}

  data1 = {
    columns: ['a', 'b', 'c', 'd', 'e', 'f (synced with a)', 'g'],
    data: [
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1']]
  };  
  data2 = {
    columns: ['1', '2', '3', '4', '5', '6 (synced with 1)', '7'],
    data: [
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6']]
  };

  data = this.data1;

  toggle() {
    if (this.data.columns === this.data1.columns) {
      this.data = this.data2;
    } else {
      this.data = this.data1;
    }
  }
  ngOnInit(){
  }
}
