import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsListPage } from './teams-list.page';

describe('TeamsListPage', () => {
  let component: TeamsListPage;
  let fixture: ComponentFixture<TeamsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
