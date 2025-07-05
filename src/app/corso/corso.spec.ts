import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corso } from './corso';

describe('Corso', () => {
  let component: Corso;
  let fixture: ComponentFixture<Corso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
