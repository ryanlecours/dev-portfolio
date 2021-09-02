import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  images: String[];


  constructor() {
    this.images = [];
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
