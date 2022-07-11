import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';

import { FormsComponent } from './component/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { StudentService } from './component/student.service';
import {HttpClientModule} from '@angular/common/http';//


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FormsComponent,
      StudentListComponent,
      StudentDetailsComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
