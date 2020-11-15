// Load from node_modules
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// Load from src directory
import { LoaderInterceptorService } from './loader-interceptor.service';

// Test Case: LoaderInterceptorService
describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptorService;
  let httpMock: HttpTestingController;

  // setup before exceution
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [LoaderInterceptorService]
      });
      service = TestBed.inject(LoaderInterceptorService);
      httpMock = TestBed.inject(HttpTestingController);
  });

  // setup after exceution
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const svc: LoaderInterceptorService = TestBed.inject(LoaderInterceptorService);
    expect(svc).toBeTruthy();
  });
});
