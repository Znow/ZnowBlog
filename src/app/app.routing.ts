import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog';
import { ContactComponent } from './contact';
//import { PostComponent } from './post';
import { SignInComponent } from './auth/components/sign-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SignInComponent }//,
  //{ path: 'post/new', component: PostComponent }
];

export const routing = RouterModule.forRoot(routes);
