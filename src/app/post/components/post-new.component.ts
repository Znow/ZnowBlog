import { Component, OnInit, Inject }       from '@angular/core';
// import {Router}     from '@angular/router';
import { PostService }     from '../services/post.service';
import { Post }            from '../post';
//import { LocalStoragePersistence } from '../../storage/localStorageService';
import { MarkdownConverter }       from '../../conversion/markdownConverter';


/* interface IPersistence {
    retrieve(key: string): any;
    store(key: string, value: any);
}*/

interface IConverter {
    convert(message: string): string;
}

@Component({
  templateUrl: './post-new.component.html',
  //bindings: [MarkdownConverter]
})

export class PostNewComponent implements OnInit {
  private storageKey: string;
  html: string;
  initVal: string;
  model = new Post(20, '', '', '');
  submitted = false;
  // firebase = new Firebase('https://znow.firebaseio.com');

  constructor(public postService: PostService,
              @Inject(MarkdownConverter) private converter: IConverter,
              //@Inject(LocalStoragePersistence) private storage: IPersistence,
              // private router: Router
              ) {

    this.html = '';
    this.storageKey = 'markdown-app';

    // let text = this.storage.retrieve(this.storageKey);
    // this.initVal = text ? text.text : '';

    // this.updateValue(this.initVal);
  }

  ngOnInit() {
    console.log('Hello Post New');
  }

  onSubmit() {
    console.log();
    this.postService.addPost(this.model.title, this.model.content);
    this.submitted = true;
  }

  public updateValue(val) {
    console.log(val);
    // this.storage.store(this.storageKey, {text: val});
    // this.html = this.converter.convert(val);
  }
}
