import { TestBed } from '@angular/core/testing';

import { Discente } from './discente';

describe('Discente', () => {
  let service: Discente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Discente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
