import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkatersListPage } from './skaters-list.page';

describe('SkatersListPage', () => {
  let component: SkatersListPage;
  let fixture: ComponentFixture<SkatersListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
