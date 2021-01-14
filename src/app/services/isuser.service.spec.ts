import { TestBed } from '@angular/core/testing';

import { IsuserService } from './isuser.service';

describe('IsuserService', () => {
  let service: IsuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
