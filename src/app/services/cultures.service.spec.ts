import { TestBed, inject } from '@angular/core/testing';

import { CulturesService } from './cultures.service';

describe('CulturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CulturesService]
    });
  });

  it('should be created', inject([CulturesService], (service: CulturesService) => {
    expect(service).toBeTruthy();
  }));
});
