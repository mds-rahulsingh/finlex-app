// Load from node_modules
import { Component } from '@angular/core';
// Load from src directory
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class MyLoaderComponent {

  // loading boolean to show and hide global loader
  loading: boolean;

  /**
   * @desc constructor function
   */
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

}
