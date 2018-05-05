import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DropdownComponent
  ],
  providers: [],
  bootstrap: []
})
export class DropdownModule { }
