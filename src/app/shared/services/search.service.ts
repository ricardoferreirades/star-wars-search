import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class SearchService {
  public BASE_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  searchPeople(term: String) {
    return this.httpClient.get(`${this.BASE_URL}people/?search=${term}`);
  }

  changePage(term: String, num: Number) {
    return this.httpClient.get(`${this.BASE_URL}people/?search=${term}&page=${num}`);
  }
}
