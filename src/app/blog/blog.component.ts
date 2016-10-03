import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/post.service';
import {Post} from '../post/post';

@Component({
  templateUrl: './blog.component.html',
  providers: [PostService]
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
