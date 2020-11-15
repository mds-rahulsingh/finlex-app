// Load from node_modules
import { TestBed } from '@angular/core/testing';
// Load from src directory
import { SearchService } from './search.service';

// Test Case: SearchService
describe('SearchService', () => {
  // setup before exceution
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchService = TestBed.inject(SearchService);
    expect(service).toBeTruthy();
  });
});
