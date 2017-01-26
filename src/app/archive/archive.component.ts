import { Component } from '@angular/core';

@Component({
  templateUrl: './archive.component.html',
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

    // collect post's dates, and show archive links based on post in which months
  }
}
