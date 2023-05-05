import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  public status: boolean = false;
  constructor(public loader: LoaderService) {
    this.status = loader.getLoading();
  }

}
