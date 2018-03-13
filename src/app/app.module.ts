import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { UserComponent } from './user/user.component';
import { FormsModule} from '@angular/forms';
import { DataService} from './services/data.service';
import {HttpModule} from '@angular/http'
import $ from 'jquery';
import { Observable } from "rxjs/Rx"

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    UserComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
