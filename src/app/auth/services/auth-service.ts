import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, AngularFireAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public auth$: AngularFireAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithCredentials(email: string, password: string, provider: number, method: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({ email, password }, { provider, method })
      .then(() => console.log("test"))
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithEmail(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.signInWithCredentials(email, password, AuthProviders.Password, AuthMethods.Password);
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth$.logout();
  }
}
