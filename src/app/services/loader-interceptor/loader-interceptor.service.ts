// Load from node_modules
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// Load from src directory
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  // the baseurl of the api service
  private requests: HttpRequest<any>[] = [];

  // initization
  constructor(private loaderService: LoaderService) { }

  /**
   * @desc the function removes requests from request list
   * @param {HttpRequest} req // http req
   * @public
   */
  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  /**
   * @desc the function intercepts an API request
   * @param {HttpRequest} req // http req
   * @param {HttpHandler} next // transfers the request to next handler
   * @public
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.requests.push(req);

    this.loaderService.isLoading.next(true);
    return Observable.create(observer => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          });
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
