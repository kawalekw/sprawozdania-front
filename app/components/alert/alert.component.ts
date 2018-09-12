import { Component, OnInit } from '@angular/core';
import {AlertserviceService} from "../../services/alertservice.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    message: any;

    constructor(private alertService: AlertserviceService) {
    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    closeAlert()
    {
        delete this.message;
        this.alertService.getMessage().subscribe(this.message);
    }
}

