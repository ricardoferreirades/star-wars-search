import { SearchService } from './../shared/services/search.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private searchService: SearchService) {}

  ngOnInit() {
  }
}
