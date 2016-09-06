import {Component, OnInit}  from '@angular/core';
// import {NgForm}                     from '@angular/common';
import {Router}                     from '@angular/router';
import {Login}                      from './login';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  currentUser: boolean = false;
  submitted: boolean = false;
  loginModel = new Login('', '');

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser') == "true" ? true : false;
  }

  onSubmit() {
    let email = this.loginModel.email;
    let password = this.loginModel.password;

    /*let credentials: FirebaseCredentials = {
      email: email,
      password: password
    };

    this.firebase.authWithPassword(credentials, (error, authData) => {
      if (error) {
      }

      console.log(authData);
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('currentUser', 'true');

      this.currentUser = true;
      this.submitted = true;
    });*/
  }

  gotoNewPost() {
    this._router.navigate(['PostNew']);
  }

  logOut() {
    //this.firebase.unauth();
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.currentUser = false;
  }
}
