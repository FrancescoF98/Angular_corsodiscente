import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDocenteNew } from './form-docente-new';

describe('FormDocenteNew', () => {
  let component: FormDocenteNew;
  let fixture: ComponentFixture<FormDocenteNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDocenteNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDocenteNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
