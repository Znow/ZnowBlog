import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { BlogComponent } from './blog';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { PostComponent, PostEditComponent, PostNewComponent } from './post';


export const routes: RouterConfig = [
  {path: '', component: HomeComponent, name: 'Home', useAsDefault: true },
  {path: '/blog', component: BlogComponent, name: 'Blog'},
  {path: '/about', component: AboutComponent, name: 'About'},
  {path: '/contact', component: ContactComponent, name: 'Contact'},
  {path: '/post/:id', component: PostComponent, name: 'Post'},
  {path: '/post/:id/edit', component: PostEditComponent, name: 'PostEdit'},
  {path: '/post/new', component: PostNewComponent, name: 'PostNew'}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
