import { Injectable } from '@angular/core';
import { CULTURES } from '../cultures';
import { Culture } from '../interfaces/culture';

@Injectable({
  providedIn: 'root'
})
export class CulturesService {

  constructor() {}

  /**
   * Filter cultures and grab matched culture
   * @param  {string}  culture
   * @return {Culture}
   */
  filterCulture(culture: string): Culture {
    const foundedCulture = CULTURES.filter(c => c.culture == culture);
    return foundedCulture[0];
  }

  /**
   * Grab culture
   * @param  {string}  culture
   * @return {Culture}
   */
  getCulture(culture: string): Culture {
    return this.filterCulture(culture);
  }

  /**
   * Grab the greeting of the culture
   *
   * @param {string} culture
   * @return string greeting
   */
  getCultureGreeting(culture: string): string {
    return this.filterCulture(culture).greeting;
  }

  /**
   * Grab the language of the culture
   *
   * @param {string} culture
   * @return array of available languages
   */
  getCultureLanguage(culture: string): string[] {
    return this.filterCulture(culture).languages;
  }
}
