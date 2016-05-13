import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';
import {RouteParams, Router} from '@angular/router-deprecated';
import {PostEditComponent} from './post-edit.component';

@Component({
  templateUrl: './app/post/post.component.html',
  providers: [PostService],
  directives: [PostEditComponent]
})

export class PostComponent implements OnInit {
  public post: Post;
  public editingPost: Post;

  constructor(
    private _postService: PostService,
    private _router: Router,
    private _routeParams: RouteParams){}

  ngOnInit() {
    // let id = this._routeParams.get('id');
    // this._service.getPost(id).then(post => this.post = post);
    // this._postService.getPost(id).then(post => this.post = post);
  }

  gotoBlog() {
    // let postId = this.post ? this.post.id : null;

    this._router.navigate(['Blog']);
  }

  editPost(post: Post) {
    this.editingPost = post;
  }
}
