import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BlankService } from "../../services/blank.service";

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

    private subject = new Subject<any>();
    private credentials: string;
    isLoggedIn = false;

    constructor(private auth: AuthService, private blankService: BlankService, private chRef: ChangeDetectorRef, private router: Router) {



    }




    ngOnInit(): void {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                const token = localStorage.getItem('token');
                if (token) {this.auth.ensureAuthenticated(token)
                    .then((user) => {
                        //console.log(user.json());
                        if (user.id) {
                            this.credentials = user.name + ' ' + user.last_name;
                        }
                    }
                    )
                    .catch((err) => {
                        console.log(err);
                    });}
                if (!token) {
                    this.credentials = 'Niezalogowano';
                }

            }

    });}}