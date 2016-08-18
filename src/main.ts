import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
// core
import { AUTH_PROVIDERS, AuthRouteHelper } from './app/auth';
import { FIREBASE_APP_PROVIDERS } from './app/firebase';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
=======
import { AppModule } from './app/app.module';
>>>>>>> refs/remotes/preboot/master

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

<<<<<<< HEAD
bootstrap(AppComponent, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    ...AUTH_PROVIDERS,
    ...FIREBASE_APP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/  routes, remove this for HTML5 mode
  ])
  .catch(err => console.error(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> refs/remotes/preboot/master
