import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent {

  private culture: string;
  private defaultCulture = 'us';

  constructor(private router: Router) {
    this.fallbackCulture();
    this.redirectToCulture();
  }

  /**
   * Set fallback culture
   * @return void
   */
  fallbackCulture(): void {
    const culture = localStorage.getItem('culture');
    if (!culture || culture === 'undefined') {
      localStorage.setItem('culture', this.defaultCulture);
      this.culture = this.defaultCulture;
    } else {
      this.culture = localStorage.getItem('culture');
    }
  }

  /**
   * Redirect to culture component
   * @return void
   */
  redirectToCulture(): void {
    this.router.navigate([ `/${this.culture}/welcome` ]);
  }
}

