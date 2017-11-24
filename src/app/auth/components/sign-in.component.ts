import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService/*, private router: Router*/) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  /*signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }*/

  /*private postSignIn(): void {
    this.router.navigate(['/']);
  }*/
}
