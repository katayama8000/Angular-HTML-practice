import { TestBed } from '@angular/core/testing';

import { TesthttpService } from './testhttp.service';

describe('TesthttpService', () => {
  let service: TesthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
