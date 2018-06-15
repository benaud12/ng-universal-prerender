import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query({
        query: gql`
          {
            allPeople {
              people {
                name
              }
            }
          }
        `,
      })
      .subscribe(console.log);
  }

}
