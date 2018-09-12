import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BlankService} from "../services/blank.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router, public nav: BlankService, private auth:AuthService) { }

  logout():void {
      localStorage.clear();
      this.router.navigateByUrl('/login');
      this.nav.hideStudent();
      this.nav.hideTeacher();

  }




  ngOnInit() {

  }

}
