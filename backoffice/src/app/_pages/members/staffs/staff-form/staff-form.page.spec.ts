import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffFormPage } from './staff-form.page';

describe('StaffFormPage', () => {
  let component: StaffFormPage;
  let fixture: ComponentFixture<StaffFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
