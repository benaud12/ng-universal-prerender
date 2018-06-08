import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-beans',
  templateUrl: './beans.component.html',
  styleUrls: ['./beans.component.css']
})
export class BeansComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Beans | DemoUniversal');
    this.meta.updateTag({
      property: 'description',
      content: 'Beans are good'
    });
  }
}
