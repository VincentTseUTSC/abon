import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EditableComponent } from './editable.component';

@NgModule({
  declarations: [
    EditableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    EditableComponent
  ],
  providers: [],
  bootstrap: []
})
export class EditableModule { }
