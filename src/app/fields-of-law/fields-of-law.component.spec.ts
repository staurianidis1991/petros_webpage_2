import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsOfLawComponent } from './fields-of-law.component';

describe('FieldsOfLawComponent', () => {
  let component: FieldsOfLawComponent;
  let fixture: ComponentFixture<FieldsOfLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsOfLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
