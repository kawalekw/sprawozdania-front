import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import {AlertserviceService} from "../services/alertservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

    courses: any[];
    students: any[];
    idCourse: any[];
    idStudent: any[];

    selectedCourse (event) {
        this.idCourse = event.target.value;
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });
        this.http.get('http://85.255.6.117:8080/courses/' + this.idCourse + '/students', {headers: headers}).subscribe(
            (data: any[]) => {
                this.students = data;
            });
    }

    selectedStudent (event) {
      this.idStudent = event.target.value;

    }

    delete() {
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });
        this.http.get('http://85.255.6.117:8080/teacher/kickstudent/'+this.idCourse+'/'+this.idStudent, {headers: headers}).subscribe(
            message => {this.router.navigateByUrl('courses'); this.alertService.success('Usunięto studenta z kursu!'); },
            err=> {this.alertService.error('Wystąpił błąd')});

    }



  constructor(private nav: BlankService, private http: HttpClient, private alertService: AlertserviceService, private router: Router, private chRef: ChangeDetectorRef) { }

    ngOnInit() {

        this.nav.show();
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        this.http.get('http://85.255.6.117:8080/teacher/courses', {headers: headers}).subscribe(
            (data: any[]) =>{
                this.courses = data;
            });



    }
}


