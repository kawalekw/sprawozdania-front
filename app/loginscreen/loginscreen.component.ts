import { AuthService } from "../services/auth.service";
import { AlertserviceService} from "../services/alertservice.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import {BlankService} from "../services/blank.service";


@Component({
    selector: 'app-loginscreen',
    templateUrl: './loginscreen.component.html',
    styleUrls: ['./loginscreen.component.css']
})
export class LoginScreenComponent implements OnInit {

    // test: string = 'just a test';
    user: User = new User();

    constructor(private router:Router, private auth: AuthService, public nav: BlankService, private alertService: AlertserviceService, private chRef: ChangeDetectorRef) { }
    onLogin(): void {
        this.auth.login(this.user)
            .then((user) => {
                localStorage.setItem('token', user.message);
                this.chRef.detectChanges();
                const token = localStorage.getItem('token');
                this.router.navigateByUrl('login');
                if (this.auth.isTeacher) this.router.navigateByUrl('courses');
                else this.router.navigateByUrl('summary');
                this.alertService.success('Pomyślnie zalogowano');


                // console.log(user.json());
            })
            .catch((error) => {
                this.alertService.error('Nieprawidłowe dane logowania');
            });

    }
    redirect(): void{
        this.router.navigate(['register']);
    }
    ngOnInit():void{
        this.nav.hide();
    }
}
