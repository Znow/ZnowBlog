import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { Router } from '@angular/router';
// import {LocalStoragePersistence } from '../storage/localStorageService';
// import {MarkdownConverter} from '../conversion/markdownConverter';

@Component({
  selector: 'my-post-edit',
  template: `
    <div *ngIf="post">
      <h2>{{post.title}} details!</h2>
      <div><label>id: </label>{{post.id}}</div>
      <div class="form-group">
        <label>Title: </label>
        <input [(ngModel)]="post.title" placeholder="title" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Content: </label>
        <textarea [(ngModel)]="post.content" rows="10" class="form-control"></textarea>
      </div>
      <br/>
      <button class="btn btn-primary" (click)="save(post)">Save</button>
    </div>
  `,
})

export class PostEditComponent {
  @Input() post: string;
  public editPost: Post;

  constructor(private router: Router) {}

  save(editPost: Post) {
    console.log(editPost);
    this.router.navigate(['Post', {id: editPost.id }]);
  }
}
