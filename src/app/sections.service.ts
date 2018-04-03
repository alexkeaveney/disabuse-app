import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SectionsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllSections() {
    return this.http.get('/api/sections')
      .map(res => res.json());
  }

}
