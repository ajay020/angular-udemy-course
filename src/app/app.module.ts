import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

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
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerService } from './services/follower.service';

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
    SignupFormComponent,
    NewCourseFormComponent,
    ResetPasswordFormComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path:'', component:HomeComponent},
        {path:'followers/:username', component:GithubFollowersComponent},
        {path:'profile/', component:HomeComponent},
        {path:'posts', component:PostsComponent},
        {path:'**', component:NotFoundComponent},
    ])
  ],
  providers: [
    /*  Angular autometically inject the instance of the service class to 
        a component that have a dependency on this service.
        All the component has access to a single instance this is called singlton
        instance.
    */
    CoursesService,
    AuthorsService,
    PostService,
    FollowerService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
