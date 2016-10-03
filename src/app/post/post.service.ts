import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Rx';
import {Post} from './post';
// import {POSTS} from './mock-posts';


@Injectable()
export class PostService {
  post: Post;
  posts: Post[];

  addPost(title: string, content: string) {
    /* var getLastId = POSTS[POSTS.length - 1].id;
     var post = <Post>{ id: getLastId + 1, title: title, content: content, created_at: "February 24, 2016" }

     POSTS.push(post);*/

    // let posts = this.firebase.child('posts');
    /* posts.push(new Post(1, title, content, Date.now().toString()), (error: Error) => {
      if (error) {
        console.error('ERROR @ createPost :', error);
      }
      console.log('hej');
    });*/
  }

  getPosts() {
    // let POSTS: Post[] = [];
    /* this.firebase.on('value', (snapshot) => {
      snapshot.forEach( (childSnapshot) => {
        let child = childSnapshot.val();
        let date = new Date(child.created_at * 1000);
        let newDate = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        let post = new Post(child.id, child.title, child.content, newDate);
        POSTS.push(post);
      });
    });*/
    // return this.firebase.child('posts');

    // return Promise.resolve(POSTS);
    // return POSTS;
  }

  getPost(id: number | string) {
    // return this.getPosts().then(posts => posts.filter(p => p.id === +id)[0]);
    // return POSTS.filter(p => p.id === +id)[0];
  }
}
