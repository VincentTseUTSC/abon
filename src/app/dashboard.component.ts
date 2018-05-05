import { Component, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
}
