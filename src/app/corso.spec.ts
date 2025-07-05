import { TestBed } from '@angular/core/testing';

import { Corso } from './corso';

describe('Corso', () => {
  let service: Corso;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Corso);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
