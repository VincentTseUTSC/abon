import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoldComponent } from './mold.component';

@NgModule({
  declarations: [
    MoldComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MoldComponent
  ],
  providers: [],
  bootstrap: []
})
export class MoldModule { }
