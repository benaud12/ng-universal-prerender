import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title) {}

  ngOnInit() {
    this.title.setTitle('DemoUniversal');
    this.meta.updateTag({
      property: 'description',
      content: 'Universal Demo App'
    });
  }
}
