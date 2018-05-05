import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AssemblyComponent } from './assembly.component';

import { AssemblyService } from './assembly.service';

@NgModule({
  declarations: [
    AssemblyComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AssemblyComponent
  ],
  providers: [
    AssemblyService
  ],
  bootstrap: []
})
export class AssemblyModule { }
