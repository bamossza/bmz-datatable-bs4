import { TestBed } from '@angular/core/testing';

import { BmzDatepickerService } from './bmz-datepicker.service';

describe('BmzDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmzDatepickerService = TestBed.get(BmzDatepickerService);
    expect(service).toBeTruthy();
  });
});
