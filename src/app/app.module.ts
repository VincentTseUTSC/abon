import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TestModule } from './test/test.module';
import { VTestModule } from './v-test/v-test.module';
import { MoldModule } from './mold/mold.module';
import { AssemblyModule } from './assembly/assembly.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { EditableModule } from './editable/editable.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';


import { APIService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    TestModule,
    VTestModule,
    MoldModule,
    AssemblyModule,
    DropdownModule,
    EditableModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
