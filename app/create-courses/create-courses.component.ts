import { Component, OnInit } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {NgbCalendar,NgbDateStruct, NgbTimeStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {AlertserviceService} from "../services/alertservice.service";

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

    model: NgbDateStruct;
    model2: NgbDateStruct;
    private headers: HttpHeaders = new HttpHeaders;
    courseName: string;


  constructor(private nav: BlankService, private calendar: NgbCalendar, private http: HttpClient, private alertService: AlertserviceService, private parser: NgbDateParserFormatter) {
      // customize default values of ratings used by this component tree
    //  config.seconds = true;
    //  config.spinners = false;
  }

  submit(){
      const token = localStorage.getItem('token');
      let headers: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${token}`
      });

     const body = {
          name: this.courseName,
          start_time: moment(this.parser.format(this.model)).format("YYYY-MM-DD HH:mm"),
          end_time: moment(this.parser.format(this.model2)).format("YYYY-MM-DD HH:mm")

      };
      //console.log(body);
      this.http.post('http://85.255.6.117:8080/courses', body, {headers: headers}).subscribe(
          message => {this.alertService.success('utworzono kurs!')},
              err=> {this.alertService.error('Wystąpił błąd')});

  }

  ngOnInit() {
      this.nav.show();
      this.nav.showTeacher();
  }

}
