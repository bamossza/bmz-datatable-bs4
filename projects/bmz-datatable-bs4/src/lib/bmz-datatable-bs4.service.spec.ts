import { TestBed } from '@angular/core/testing';

import { BmzDatatableBs4Service } from './bmz-datatable-bs4.service';

describe('BmzDatatableBs4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmzDatatableBs4Service = TestBed.get(BmzDatatableBs4Service);
    expect(service).toBeTruthy();
  });
});
