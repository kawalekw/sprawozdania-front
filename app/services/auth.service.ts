import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { Router, NavigationStart, RoutesRecognized, ActivatedRoute} from '@angular/router';
import { Usreg } from '../models/usreg';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import * as decode from "jwt-decode";


@Injectable()
export class AuthService {
    private BASE_URL: string = 'http://85.255.6.117:8080';
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    private subject = new Subject<any>();
    token: any;
    isTeacher: boolean = false;
    isLoggedIn: boolean;
    constructor(private http: HttpClient, private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                const token = localStorage.getItem('token');

        if (token) {
            this.isLoggedIn=true;
            //console.log(token);
            const payload = decode(token);
            if (payload.roles.includes("ROLE_TEACHER")==true)
            {
                this.isTeacher = true;
               // console.log(this.isTeacher);
            }
            else {this.isTeacher = false;}
           // console.log(payload);
        }}});}

    login(user: User): Promise<any> {
        let url: string = 'http://85.255.6.117:8080/user/login';
        return this.http.post(url, user, {headers: this.headers}).toPromise();
    }

    register(user: Usreg): Promise<any> {
        let url: string = 'http://85.255.6.117:8080/user/register';
        return this.http.post(url, user, {headers: this.headers}).toPromise();
    }


    ensureAuthenticated(token): Promise<any> {
        let url: string = 'http://85.255.6.117:8080/user/whoami';
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        });
        return this.http.get(url, {headers: headers}).toPromise();
    }

    ngOnInit(): void {
        this.getCredentials();
    }




    credit(material:string){
        this.subject.next({text:material});
    }
    getCredentials() {
        return this.subject.asObservable();
   }


}
