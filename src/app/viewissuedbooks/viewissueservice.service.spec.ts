import { TestBed } from '@angular/core/testing';

import { ViewissueserviceService } from './viewissueservice.service';

describe('ViewissueserviceService', () => {
  let service: ViewissueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewissueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
