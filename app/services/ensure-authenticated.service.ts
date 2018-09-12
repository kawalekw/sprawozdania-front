import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from "./auth.service";
import * as decode from "jwt-decode";
import {BlankService} from "./blank.service";

@Injectable()
export class EnsureAuthenticatedService implements CanActivate{

  constructor(private auth: AuthService, private router: Router, private nav: BlankService) { }
  canActivate(): boolean {
    const token = localStorage.getItem('token')
    if (token) {
      if (!this.auth.isTeacher){
        this.nav.showStudent();
        return true;}
      else this.router.navigateByUrl('/courses');

    }
    else this.router.navigateByUrl('/login');

  }

  }


