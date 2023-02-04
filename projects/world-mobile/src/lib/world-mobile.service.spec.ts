import { TestBed } from '@angular/core/testing';

import { WorldMobileService } from './world-mobile.service';

describe('WorldMobileService', () => {
  let service: WorldMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
