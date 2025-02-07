import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkaterFormPage } from './skater-form.page';

describe('SkaterFormPage', () => {
  let component: SkaterFormPage;
  let fixture: ComponentFixture<SkaterFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaterFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
