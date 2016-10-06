import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
// import {NgForm}                     from '@angular/common';
import { Router } from '@angular/router';
import { Login } from './login';
import { AuthService } from '../auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
  currentUser: boolean = false;
  submitted: boolean = false;
  loginModel = new Login('', '');
}

