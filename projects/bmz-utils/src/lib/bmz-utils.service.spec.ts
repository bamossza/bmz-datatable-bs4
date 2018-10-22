import { TestBed } from '@angular/core/testing';

import { BmzUtilsService } from './bmz-utils.service';

describe('BmzUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmzUtilsService = TestBed.get(BmzUtilsService);
    expect(service).toBeTruthy();
  });
});
