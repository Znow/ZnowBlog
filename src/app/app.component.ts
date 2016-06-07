import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { BlogComponent } from './blog';
import { ContactComponent } from './contact';
import { PostComponent, PostNewComponent, PostEditComponent } from './post';
import { ArchiveComponent } from './archive';
import { LoginComponent } from './login';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService, ...ROUTER_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, ArchiveComponent, LoginComponent],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
  {path: '/blog', component: BlogComponent, name: 'Blog'},
  {path: '/about', component: AboutComponent, name: 'About'},
  {path: '/contact', component: ContactComponent, name: 'Contact'},
  {path: '/post/:id', component: PostComponent, name: 'Post'},
  {path: '/post/:id/edit', component: PostEditComponent, name: 'PostEdit'},
  {path: '/post/new', component: PostNewComponent, name: 'PostNew'}
])

export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
