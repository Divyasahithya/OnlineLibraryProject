import { TestBed } from '@angular/core/testing';
import { IssueserviceService } from './issueservice.service';
describe('IssueserviceService', () => {
  let service: IssueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
