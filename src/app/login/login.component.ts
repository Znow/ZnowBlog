import {Component, OnInit}  from '@angular/core';
// import {NgForm}                     from '@angular/common';
import {Router}                     from '@angular/router-deprecated';
import {Login}                      from './login';
// import * as firebase                from 'firebase';

@Component({
  selector: 'my-login',
  templateUrl: './app/login/login.component.html'
})

export class LoginComponent implements OnInit {
  currentUser: boolean = false;
  submitted: boolean = false;
  loginModel = new Login('', '');
  firebase = new Firebase('https://znow.firebaseio.com');

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
  }

  onSubmit() {
    let email = this.loginModel.email;
    let password = this.loginModel.password;

    let credentials: FirebaseCredentials = {
      email: email,
      password: password
    };

    this.firebase.authWithPassword(credentials, (error, authData) => {
      if (error) {
        console.log(error);
      }

      console.log(authData);
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('currentUser', 'true');

      this.currentUser = true;
      this.submitted = true;
    });
  }

  gotoNewPost() {
    this._router.navigate(['PostNew']);
  }

  logOut() {
    this.firebase.unauth();
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.currentUser = false;
  }
}
