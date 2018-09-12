import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlankService} from "../services/blank.service";
import 'rxjs/add/operator/toPromise';
import {AlertserviceService} from "../services/alertservice.service";

@Component({
  selector: 'app-join-courses',
  templateUrl: './join-courses.component.html',
  styleUrls: ['./join-courses.component.css']
})
export class JoinCoursesComponent implements OnInit {
    courseKey: string;
    private header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    url: string = 'http://85.255.6.117:8080/courses/join/';

    constructor(public nav: BlankService, private http: HttpClient, private alertService:AlertserviceService) {
    }

    ngOnInit() {
        this.nav.show();
    }

    key(){
        const token = localStorage.getItem('token');
        this.postKey(token);
    }

    postKey(token) {

        //console.log(this.courseKey);
        let header: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        //console.log(header);


       return this.http.post(this.url + this.courseKey, null, {headers: header}).toPromise()
           .then(
           (message) => {this.alertService.success('dodano do kursu!')})
           .catch(
            (err)=> {this.alertService.error('Wystąpił błąd')}
       );

    }
}