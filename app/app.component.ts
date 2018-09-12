import { Component } from '@angular/core';
import {BlankService} from "./services/blank.service";
import { Router } from '@angular/router';
//import { StatusComponent} from "./components/status/status.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   title = 'SZS';
    constructor(public nav: BlankService, private router: Router) { }

    ngOnInit() {
    }

}
