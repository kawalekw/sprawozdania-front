import { Component, OnInit } from '@angular/core';
import {BlankService} from "../services/blank.service";
import {NgbCalendar,NgbDateStruct, NgbTimeStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {AlertserviceService} from "../services/alertservice.service";

@Component({
  selector: 'app-create-definitions',
  templateUrl: './create-definitions.component.html',
  styleUrls: ['./create-definitions.component.css']
})
export class CreateDefinitionsComponent implements OnInit {

    model: NgbDateStruct;
    model2: NgbDateStruct;
    private headers: HttpHeaders = new HttpHeaders;
    definitionName: string;
    courses: any [];
    idCourse: any [];

    selectedCourse(event) {
      this.idCourse = event.target.value;
    }


    constructor(private nav: BlankService, private calendar: NgbCalendar, private http: HttpClient, private alertService: AlertserviceService, private parser: NgbDateParserFormatter) {

    }

    submit(){
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        const body = {
            course_id: this.idCourse,
            title: this.definitionName,
            start_time: moment(this.parser.format(this.model)).format("YYYY-MM-DD HH:mm"),
            end_time: moment(this.parser.format(this.model2)).format("YYYY-MM-DD HH:mm")

        };
        //console.log(body);
        this.http.post('http://85.255.6.117:8080/courses/definitions/', body, {headers: headers}).subscribe(
            message => {this.alertService.success('utworzono temat sprawozdania!')},
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
                this.courses = data;
            });



    }
}


