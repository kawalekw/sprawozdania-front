import { Component, OnInit } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import {AlertserviceService} from "../services/alertservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-courses',
  templateUrl: './modify-courses.component.html',
  styleUrls: ['./modify-courses.component.css']
})
export class ModifyCoursesComponent implements OnInit {

    courses: any[];
    selectedReport: any[];
    modifyName: string;

    selectedCourse (event) {
        this.selectedReport = event.target.value;
    }


  constructor(private nav: BlankService, private http: HttpClient, private alertService: AlertserviceService, private router: Router) { }

    post(){
        const body = {
            name: this.modifyName
        };
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });
        this.http.patch('http://85.255.6.117:8080/courses/'+this.selectedReport, body, {headers: headers}).subscribe(
            message => {this.router.navigateByUrl('courses'); this.alertService.success('Zmieniono nazwę kursu!'); },
            err=> {this.alertService.error('Wystąpił błąd')});
    }
    delete(){
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });
        this.http.delete('http://85.255.6.117:8080/courses/'+this.selectedReport, {headers: headers}).subscribe(
            message => {this.router.navigateByUrl('courses'); this.alertService.success('Usunięto kurs!'); },
            err=> {this.alertService.error('Wystąpił błąd')});
    }

    ngOnInit() {

        this.nav.show();
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        this.http.get('http://85.255.6.117:8080/teacher/courses', {headers: headers}).subscribe(
            (data: any[]) =>{
                this.courses = data;});
    }
}
