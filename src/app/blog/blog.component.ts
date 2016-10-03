import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/post.service';
import {Post} from '../post/post';
// import {TruncatePipe} from '../truncate';

@Component({
  templateUrl: './blog.component.html'// ,
  // pipes: [TruncatePipe]
})

export class BlogComponent implements OnInit {
  posts: Post[];
  currentUser: boolean = false;

  constructor(public postService: PostService) {
    console.log(localStorage.getItem('currentUser'));
    this.currentUser = localStorage.getItem('currentUser') === 'true' ? true : false;
  }

  getPosts() {
    // this.postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit(): any {
    // this.getPosts();

  }
}
