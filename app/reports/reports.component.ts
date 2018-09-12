import { Component, OnInit } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {



  constructor(public nav: BlankService, private http: HttpClient) { }

  courses: any[];
  selectedReport: any[];

  selectedCourse (event) {
    this.selectedReport = event.target.value;
  }

  ngOnInit() {

      this.nav.show();
      const token = localStorage.getItem('token');
      let headers: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${token}`
      });

      this.http.get('http://85.255.6.117:8080/courses/definitions/my', {headers: headers}).subscribe(
          (data: any[]) =>{
      this.courses = data;});
  }

}
