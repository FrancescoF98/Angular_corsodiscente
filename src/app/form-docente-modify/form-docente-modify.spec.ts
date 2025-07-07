import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDocenteModify } from './form-docente-modify';

describe('FormDocenteModify', () => {
  let component: FormDocenteModify;
  let fixture: ComponentFixture<FormDocenteModify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDocenteModify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDocenteModify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
