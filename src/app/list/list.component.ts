import { Component, Input, OnInit } from '@angular/core';
import { fade } from './../shared/animations/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    fade
  ]
})
export class ListComponent implements OnInit {
  @Input() items: any[];
  @Input() serchValue = '';

  constructor() {}

  ngOnInit() {
  }

  searchValue() {
    return this.serchValue;
  }
}
