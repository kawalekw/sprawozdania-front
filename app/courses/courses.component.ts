import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    courses: any[];
    id: any[];
    dataTable: any;
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(public nav: BlankService, private http: HttpClient, private chRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.nav.show();
        this.nav.showTeacher();
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        this.http.get('http://85.255.6.117:8080/teacher/courses', {headers: headers})
            .subscribe((data: any[]) => {
                this.courses = data;
                this.chRef.detectChanges();
                const table: any = $('table');
                this.dataTable = table.DataTable();
                //console.log(data);

            });


    }
}