import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {AuthService} from "./auth.service";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlankService {
    visible: boolean;
    teacherVisible: boolean;
    studentVisible: boolean;
    private keepAfterNavigationChange =true;


    private subject = new Subject<any>();
    constructor(private auth: AuthService, private router: Router) {
        this.visible = false;
    }
    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            if(this.auth.isTeacher) this.router.navigateByUrl('/summary');
            else this.router.navigateByUrl('/summary');
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return true;
        }
    }
    hide() {this.visible = false;}

    hideTeacher() {this.teacherVisible = false;}

    showTeacher() {this.teacherVisible = true;}

    hideStudent() {this.studentVisible = false;}

    showStudent() {this.studentVisible = true;}

    show() {this.visible = true;}

    toggle() {this.visible = !this.visible;}



}
