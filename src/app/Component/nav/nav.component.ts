import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { tokenName } from '@angular/compiler';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
      this.router.navigate(['/Member']);
    }, error => {
      this.alertify.error(error);
    } );
  }

  loggedin () {
    return this.authService.loggin();
  }

  loggedout () {
    localStorage.removeItem('token');
    this.alertify.message('Logged out!');
    this.router.navigate(['/Home']);
  }

}
