import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './components/post.component';
import { PostNewComponent } from './components/post-new.component';
import { PostEditComponent } from './components/post-edit.component';
import { PostService } from './services/post.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  },
  {
      path: 'post/new',
      component: PostNewComponent
  }//,
//   {
//     path: 'post',
//     component: PostComponent,
//     children: [
//         {
//             path: '',
//             component: PostComponent,
//             children: [
//                 {
//                     path: 'new',
//                     component: PostNewComponent
//                 },
//                 {
//                     path: ':id',
//                     component: PostComponent
//                 },
//                 {
//                     path: ':id/edit',
//                     component: PostEditComponent
//                 }
//             ]
//         }
//     ]
//   },
  // { path: '', component: PostComponent},
  // { path: 'post/:id', component: PostComponent },
  // { path: 'post/:id/edit', component: PostEditComponent },
  // { path: 'new', component: PostNewComponent },
];


@NgModule({
  declarations: [
    PostComponent,
    PostNewComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PostService
  ],
  exports: [
    RouterModule
  ]
})

export class PostModule {}

export { PostService };
export { PostComponent };
export { PostNewComponent };
export { PostEditComponent };
