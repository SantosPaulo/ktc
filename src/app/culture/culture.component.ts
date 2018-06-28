import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CulturesService } from '../services/cultures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  private currentCulture: string;
  private cultureGreeting: string;
  private cultureLanguages: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cultureService: CulturesService
  ) {
    this.currentCulture = route.snapshot.paramMap.get('culture');
  }

  ngOnInit() {
    this.initCulture();
  }

  /**
   * Initializa culture, call to services action
   */
  initCulture() {
    this.cultureGreeting = this.cultureService.getCultureGreeting(this.currentCulture);
    this.cultureLanguages = this.cultureService.getCultureLanguage(this.currentCulture);
  }

  /**
   * Set culture
   * @param {string} culture
   */
  setCulture(culture: string) {
    localStorage.setItem('culture', culture);
    this.currentCulture = culture;
    this.initCulture();
    this.router.navigate([ `/${culture}/welcome` ]);
  }
}
