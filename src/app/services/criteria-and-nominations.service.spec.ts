import { TestBed } from '@angular/core/testing';

import { CriteriaAndNominationsService } from './criteria-and-nominations.service';

describe('CriteriaAndNominationsService', () => {
  let service: CriteriaAndNominationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteriaAndNominationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
