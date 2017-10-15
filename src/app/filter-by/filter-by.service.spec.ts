import { TestBed, inject } from '@angular/core/testing';

import { FilterByService } from './filter-by.service';

describe('FilterByService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterByService]
    });
  });

  it('should be created', inject([FilterByService], (service: FilterByService) => {
    expect(service).toBeTruthy();
  }));
});
