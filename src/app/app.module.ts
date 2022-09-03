import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { MediaComponent } from './media/media.component';
import { Media2Component } from './media2/media2.component';
@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    Media2Component
  ],
  imports: [
    BrowserModule,
    NgxDaterangepickerMd.forRoot(),
    NgSelectModule, 
    FormsModule, BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    NgxDatatableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
