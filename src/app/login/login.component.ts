import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import {NgForm}                     from '@angular/common';
import {Router} from '@angular/router';
import {Login} from './login';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
  currentUser: boolean = false;
  submitted: boolean = false;
  loginModel = new Login('', '');

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser') === 'true' ? true : false;
  }

  onSubmit() {
  }

  gotoNewPost() {
    this._router.navigate(['PostNew']);
  }

  logOut() {
    // this.firebase.unauth();
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.currentUser = false;
  }
}

