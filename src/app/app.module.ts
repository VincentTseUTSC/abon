import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModule } from './test/test.module';
import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DropdownComponent } from './dropdown.component';
import { EditableComponent } from './editable.component';

import { APIService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DropdownComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TestModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
