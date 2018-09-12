import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as decode from "jwt-decode";
import { Router } from "@angular/router";
import {AuthService} from "./services/auth.service";
import {BlankService} from "./services/blank.service";
@Injectable()
export class RoleguardGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private nav: BlankService) {}

  canActivate(){
      const token = localStorage.getItem('token');
      if(token){
          if (this.auth.isTeacher) {
              this.nav.showTeacher();
              return true;
          }
              else
              this.router.navigateByUrl('/summary');


          }
      else {
          this.router.navigateByUrl('/login');
      }
  }
}
