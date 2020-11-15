// Load from node_modules
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
// Load from src directory
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // show the search field based on route
  isVisible = true;

  /**
   * @desc constructor function
   */
  constructor(private searchService: SearchService,
              private router: Router) { }

  /**
   * @desc the function initializes
   */
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isVisible = event.url === '/employees' || event.url === '/';
      }
    });
  }

  /**
   * @desc this function uses search service to filter employee list
   * @param {string} searchString // search string
   * @public
   */
  filterEmployee(searchString: string): void {
    this.searchService.updateSearch(searchString);
  }

}
