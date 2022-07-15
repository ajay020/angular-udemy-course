import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { TitlecasingComponent } from './titlecasing/titlecasing.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecasePipe } from './titlecase.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    TitlecasingComponent,
    FavouriteComponent,
    TitlecasePipe,
    PanelComponent,
    LikeComponent,
    DirectiveDemoComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyFormComponent,
  ],
  imports: [
BrowserModule,
  FormsModule
  ],
  providers: [
    /*  Angular autometically inject the instance of the service class to 
        a component that have a dependency on this service.
        All the component has access to a single instance this is called singlton
        instance.
    */
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
