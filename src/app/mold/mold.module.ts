import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoldComponent } from './mold.component';

import { DropdownModule } from '../dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';
import { EditableModule } from '../editable/editable.module';

import { MoldService } from './mold.service';

@NgModule({
  declarations: [
    MoldComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    EditableModule
  ],
  exports: [
    MoldComponent
  ],
  providers: [
    MoldService
  ],
  bootstrap: []
})
export class MoldModule { }
