import { NgModule, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './archive';
import { BlogComponent } from './blog';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';
import { PostModule } from './post';

import { TruncatePipe } from './truncate.pipe';

//import { AuthModule } from './auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { AuthService } from './auth/services/auth.service'

import { SignInComponent } from './auth/components/sign-in.component';

//import { FirebaseModule } from './firebase';

import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    //AuthModule,
    PostModule,
    //FirebaseModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    AboutComponent,
    ArchiveComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    SignInComponent,
    TruncatePipe
  ],
  providers: [
    ApiService,// ,
    // {provide: ErrorHandler, useClass: MyErrorHandler}
    AuthService
  ],
  bootstrap: [AppComponent]
})

/* class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
  }
}*/

export class AppModule {
  constructor(public appRef: ApplicationRef, router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
