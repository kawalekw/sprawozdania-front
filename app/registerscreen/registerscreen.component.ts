import { AuthService } from "../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Usreg } from "../models/usreg";
import { Router } from "@angular/router";
import {BlankService} from "../services/blank.service";
import {AlertserviceService} from "../services/alertservice.service";
import { FormGroup, FormControl } from '@angular/forms';
//import { CustomValidators } from "ng5-validation";
import {Usereg} from "../models/usereg";

@Component({
    selector: 'app-registerscr',
    templateUrl: './registerscreen.component.html',
    styleUrls: ['./registerscreen.component.css']
})
export class RegisterscreenComponent implements OnInit {

    // test: string = 'just a test';
    usreg: Usreg = new Usreg();

    constructor(private router:Router, private auth: AuthService, public nav: BlankService, private alertService: AlertserviceService) { }



    onRegister(): void {


        this.auth.register(this.usreg)
            .then((usreg) => {
                this.router.navigateByUrl('login');
                this.alertService.success('Pomyślnie zarejestrowano użytkownika');
                //console.log(usreg.json());
            })
            .catch((error) => {
                this.alertService.error('Wystąpił błąd, sprawdź czy e-mail jest w domenie utp.edu.pl');
            });
    }



    ngOnInit():void{
        this.nav.hide();
    }
}
