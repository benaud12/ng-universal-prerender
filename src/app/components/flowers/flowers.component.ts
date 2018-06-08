import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Flowers | DemoUniversal');
    this.meta.updateTag({
      property: 'description',
      content: 'Lovely lovely flowers'
    });
  }
}
