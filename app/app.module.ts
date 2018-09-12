import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng5-validation';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsComponent } from './reports/reports.component';
import { SummaryComponent } from './summary/summary.component';
import { StatusComponent} from "./components/status/status.component";
import { AuthService} from './services/auth.service';
import {EnsureAuthenticatedService} from "./services/ensure-authenticated.service";
import {LoginRedirectService} from "./services/login-redirect.service";
import {BlankService} from "./services/blank.service";
import {LoginScreenComponent} from "./loginscreen/loginscreen.component";
import {RegisterscreenComponent} from "./registerscreen/registerscreen.component";
import {AlertserviceService} from "./services/alertservice.service";
import {AlertComponent} from "./components/alert/alert.component";
import {JoinCoursesComponent} from "./join-courses/join-courses.component";
import {CoursesComponent} from "./courses/courses.component";
import {CreateCoursesComponent} from "./create-courses/create-courses.component";
import {RoleguardGuard} from "./roleguard.guard";
import { ModifyCoursesComponent } from './modify-courses/modify-courses.component';
import { CreateDefinitionsComponent } from './create-definitions/create-definitions.component';
import { ModifyDefinitionsComponent } from './modify-definitions/modify-definitions.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportsComponent,
    SummaryComponent,
    StatusComponent,
    LoginScreenComponent,
    RegisterscreenComponent,
    AlertComponent,
    JoinCoursesComponent,
    CoursesComponent,
    CreateCoursesComponent,
    ModifyCoursesComponent,
    CreateDefinitionsComponent,
    ModifyDefinitionsComponent,
    ManageStudentsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
        {path: 'login', component: LoginScreenComponent, canActivate:[LoginRedirectService]},
        {path: 'register', component: RegisterscreenComponent},
        {path: 'reports', component: ReportsComponent, canActivate: [EnsureAuthenticatedService]},
        {path: 'summary', component: SummaryComponent, canActivate: [EnsureAuthenticatedService]},
        {path: 'join-courses', component: JoinCoursesComponent, canActivate: [EnsureAuthenticatedService]},
        {path: 'summary', component: SummaryComponent, canActivate: [EnsureAuthenticatedService]},
        {path: 'courses', component: CoursesComponent, canActivate: [RoleguardGuard]},
        {path: 'create-courses', component: CreateCoursesComponent, canActivate: [RoleguardGuard]},
        {path: 'modify-courses', component: ModifyCoursesComponent, canActivate: [RoleguardGuard]},
        {path: 'modify-definitions', component: ModifyDefinitionsComponent, canActivate: [RoleguardGuard]},
        {path: 'manage-students', component: ManageStudentsComponent, canActivate: [RoleguardGuard]},
        {path: 'create-definitions', component: CreateDefinitionsComponent, canActivate: [RoleguardGuard]},
        {path: '', component: AppComponent, canActivate: [BlankService]},


    ])
  ],
  providers: [AuthService, EnsureAuthenticatedService, LoginRedirectService, BlankService, AlertserviceService, RoleguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
