import { Component } from '@angular/core';

import { ApiService } from './shared';
import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
<<<<<<< HEAD
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, ArchiveComponent, LoginComponent],
=======
>>>>>>> refs/remotes/preboot/master
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
