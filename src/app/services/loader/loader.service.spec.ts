// Load from node_modules
import { TestBed } from '@angular/core/testing';
// Load from src directory
import { LoaderService } from './loader.service';

// Test Case: LoaderService
describe('LoaderService', () => {
  // setup before exceution
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.inject(LoaderService);
    expect(service).toBeTruthy();
  });
});
