import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../services/post.service';


@Component({
  templateUrl: './post.component.html',
  providers: [PostService]
})

export class PostComponent implements OnInit {
  public post: Post;
  public editingPost: Post;

  constructor(
    // private _postService: PostService,
    private _router: Router) {}

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
