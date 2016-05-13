import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PostService} from '../post/post.service';
import {Post} from '../post/post';
import {TruncatePipe} from '../truncate';

@Component({
  templateUrl: './app/blog/blog.component.html',
  pipes: [TruncatePipe],
  directives: [ROUTER_DIRECTIVES]
})

export class BlogComponent implements OnInit {
  posts: Post[];
  currentUser: boolean = false;

  constructor(public postService: PostService) {
    console.log(localStorage.getItem('currentUser'));
    this.currentUser = localStorage.getItem('currentUser');
  }

  getPosts() {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit(): any {
    this.getPosts();

  }
}
