// Load from node_modules
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // variable to check the status of loading
  public isLoading = new BehaviorSubject(false);

  constructor() { }
}