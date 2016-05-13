import {Component, Inject} from '@angular/core';
import {Post} from './post';
import {RouteParams, Router} from '@angular/router-deprecated';
import {LocalStoragePersistence } from '../storage/localStorageService';
import {MarkdownConverter} from '../conversion/markdownConverter';



@Component({
  selector: 'post-edit',
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
  inputs: ['post']
})

export class PostEditComponent {
  public post: Post;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams){}

  save(post: Post) {
    console.log(post);
    this._router.navigate(['Post', {id: post.id }]);
  }
}
