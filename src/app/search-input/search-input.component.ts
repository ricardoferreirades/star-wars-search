import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Output() typed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(queryTerm: String) {
    this.search.emit({getValue: queryTerm });
  }

  onType(queryTerm: String) {
    this.typed.emit({getValue: queryTerm });
  }
}
