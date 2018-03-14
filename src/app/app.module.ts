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
import { RouterModule, Routes} from '@angular/router'
import $ from 'jquery';
import { Observable } from "rxjs/Rx";
import { AboutComponent } from './about/about.component'
import { componentFactoryName } from '@angular/compiler';

const appRoutes: Routes = [
  {path :'',component:UserComponent},
{path :'about', component:AboutComponent}]







@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    UserComponent,
    AboutComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    CoursesService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
