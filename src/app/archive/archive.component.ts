import {Component} from '@angular/core';

@Component({
  template: './archive.component.html',
  selector: 'my-archive'
})

export class ArchiveComponent {
  public archives;

  constructor() {
    this.archives = [
      'Januar 2016',
      'Februar 2016',
      'Marts 2016'
    ];
  }
}
