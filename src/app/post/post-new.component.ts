import {Component, Inject}       from '@angular/core';
import {Router}     from '@angular/router-deprecated';
// import {NgForm}                  from '@angular/common';
import {PostService}             from './post.service';
import {Post}                    from './post';
import {LocalStoragePersistence} from '../storage/localStorageService';
import {MarkdownConverter}       from '../conversion/markdownConverter';
// import * as firebase             from 'firebase';


interface IPersistence {
    retrieve(key: string): any;
    store(key: string, value: any);
}

interface IConverter {
    convert(message: string): string;
}

@Component({
  templateUrl: 'app/post/post-form.component.html',
  bindings: [MarkdownConverter, LocalStoragePersistence]
})

export class PostNewComponent {
  private storageKey: string;
  html: string;
  initVal: string;
  model = new Post(20, '', '', '');
  submitted = false;
  firebase = new Firebase('https://znow.firebaseio.com');

  constructor(public postService: PostService,
              @Inject(MarkdownConverter) private converter: IConverter,
              @Inject(LocalStoragePersistence) private storage: IPersistence,
              private _router: Router) {

    this.html = '';
    this.storageKey = 'markdown-app';

    let text = this.storage.retrieve(this.storageKey);
    this.initVal = text ? text.text : '';

    this.updateValue(this.initVal);
  }

  onSubmit() {
    console.log();
    this.postService.addPost(this.model.title, this.model.content);
    this.submitted = true;
  }

  public updateValue(val) {
    this.storage.store(this.storageKey, {text: val});
    this.html = this.converter.convert(val);
  }
}
