import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
// import {NgForm}                     from '@angular/common';
import { Router } from '@angular/router';
import { Login } from './login';
import { AuthService } from '../auth/services/auth.service';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
  currentUser: false;
  submitted: false;
  loginModel = new Login('', '');

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    let email = this.loginModel.email;
    let password = this.loginModel.password;

    this.auth.login(email, password)
      .then(() => this.router.navigate(['/']));
  }
}
