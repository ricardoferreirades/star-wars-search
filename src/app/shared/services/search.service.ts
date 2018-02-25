import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class SearchService {
  public BASE_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.httpClient.get(`${this.BASE_URL}people`);
  }
}
