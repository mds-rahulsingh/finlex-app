// Load from node_modules
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // search as a subject of rxjs
  search: Subject<any> = new Subject<any>();

  // initization
  constructor() { }

  /**
   * @desc the function dispatches the obtained string to other subscribers
   * @param {string} search // search string to be dispatches to other subscribers
   * @public
   */
  updateSearch(search: string): void {
    this.search.next(search);
  }

}
