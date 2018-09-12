import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService} from "./auth.service";
import * as decode from "jwt-decode";

@Injectable()
export class LoginRedirectService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if(token){
     if (this.auth.isTeacher ) {
            this.router.navigateByUrl('/courses');
        }
        else {
            this.router.navigateByUrl('/summary');
        }
  }
  else return true;

}
}
