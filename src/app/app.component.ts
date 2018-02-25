
import { Component, ElementRef, OnInit } from '@angular/core';
import { SearchService } from './shared/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'Star Wars People Search';
  people: any[] = [];
  message: String;
  swName: String;
  typedValue: String = '';

  constructor (
    // service that get the star wars people
    private searchService: SearchService
  ) {}

  ngOnInit() {
    // do a request with the term
    this.searchService.getPeople()
    .subscribe(
      res => {
        // set the people variable with the star wars people
        this.people = res['results'];
      },
      err => {
        // listening erros
        throw (err.message);
      }
    );
  }

  // set the value filter the list
  onSearch(queryTerm: String) {
    this.swName = queryTerm;
  }

  // set the typedValue variable with the search text typed
  onKeyUp(p) {
    this.typedValue = p.getValue();
  }

  // call the method that set the search filter when the button is pressed
  onPress(p, val) {
    this.onSearch(p.getValue(val));
  }

  // call the method that set the search filter when hit the enter key
  onEnter(p) {
    this.onSearch(p.getValue());
  }
}
