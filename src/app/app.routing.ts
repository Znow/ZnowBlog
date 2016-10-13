import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog';
import { ContactComponent } from './contact';
import { PostComponent, PostEditComponent, PostNewComponent } from './post';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post/:id/edit', component: PostEditComponent },
  { path: 'post/new', component: PostNewComponent }
];

export const routing = RouterModule.forRoot(routes);
