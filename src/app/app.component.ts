import { Component, ElementRef, OnInit } from '@angular/core';

import { SearchService } from './shared/services/search.service';
import { fade } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fade
  ]
})
export class AppComponent implements OnInit {
  title: String = 'Star Wars People Search';
  people: any[] = [];
  typedValue: String = '';
  currentPage: Number = 1;
  pages = [];
  hasPeople: Boolean = true;

  constructor (
    // service that get the star wars people
    private searchService: SearchService
  ) {}

  ngOnInit() {
    // listing on render
    this.getPeople();
  }

  getPeople() {
    // do a request with the term
    this.searchService.searchPeople('')
    .subscribe(
      res => {
        // set the people variable with the star wars people
        this.people = res['results'];
        this.getNumberOfPages(res['count'], res['next'], this.people.length);
      },
      err => {
        // listening erros
        throw (err.message);
      }
    );
  }

  // method to calculate the number of pages
  getNumberOfPages(count, nextPage, numResults) {
    this.pages = [];

    // checking if has more than the minimum per page
    if (count > 10 ) {
        const numItems = count;
        const numPages = count / numResults;
        for (let i = 0; i < numPages; i++ ) {
          this.pages.push(i);
        }
    }
  }

  // method to search a people
  searchPeople(term: String) {
    this.searchService.searchPeople(term)
    .subscribe(
      (res => {
        this.people = res['results'];
        this.getNumberOfPages(res['count'], res['next'], res['results'].length);

        if ( !this.people.length ) {
          this.hasPeople = false;
          return false;
        }

        this.hasPeople = true;
      }),
      (err => {
        throw(err);
      })
    );
  }

  // set the value filter the list
  onSearch(p) {
    this.typedValue = p.getValue;
  }

  // call the method that set the search filter when the button is pressed
  onPress(p, val) {
    this.typedValue = val;
    this.searchPeople(p.getValue(val));
  }

  // call the method that set the search filter when hit the enter key
  onEnter(p) {
    this.typedValue = p.getValue;
    this.searchPeople(p.getValue);
  }

  onChangePage(currPage) {
    // Disabling click on previus, first and last and next buttons when is on the first or last pages
    if (currPage > this.pages.length || currPage < 1) {
      return false;
    }

    if (currPage === this.currentPage) {
      return false;
    }

    // setting current page
    this.currentPage = currPage;

    // changing page
    this.searchService.changePage(this.typedValue, currPage)
    .subscribe(
      (res => {
        this.people = res['results'];
      }),
      (err => {
        throw(err);
      })
    );
  }
}
