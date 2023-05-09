import { TestBed } from '@angular/core/testing';

import { DonataireService } from './donataire.service';

describe('DonataireService', () => {
  let service: DonataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
