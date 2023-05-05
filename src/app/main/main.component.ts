import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) { }

  options: AnimationOptions = {
    path: '../../assets/animations/a1.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  goHome() {
    this.router.navigate(['/']);
  }

}
