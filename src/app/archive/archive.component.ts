import {Component} from '@angular/core';

@Component({
  template: `
    <ol class="list-unstyled">
      <li *ngFor="#archive of archives"><a href="#">{{archive}}</a></li>
    </ol>
    <!--<ol class="list-unstyled">
      <li><a href="#">March 2014</a></li>
      <li><a href="#">February 2014</a></li>
      <li><a href="#">January 2014</a></li>
      <li><a href="#">December 2013</a></li>
      <li><a href="#">November 2013</a></li>
      <li><a href="#">October 2013</a></li>
      <li><a href="#">September 2013</a></li>
      <li><a href="#">August 2013</a></li>
      <li><a href="#">July 2013</a></li>
      <li><a href="#">June 2013</a></li>
      <li><a href="#">May 2013</a></li>
      <li><a href="#">April 2013</a></li>
    </ol>-->
  `,
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
