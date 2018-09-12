import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {BlankService} from "../services/blank.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    courses: any[];
    id: any[];
    dataTable:any;
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(public nav: BlankService, private http:HttpClient, private chRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.nav.show();
        const token = localStorage.getItem('token');
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${token}`
        });

        this.http.get('http://85.255.6.117:8080/courses/definitions/my', {headers: headers})
            .subscribe((data: any[]) => {
                this.courses = data;
                this.chRef.detectChanges();
                const table: any = $('table');
                this.dataTable = table.DataTable();
                //console.log(data);

            });


    }


}
