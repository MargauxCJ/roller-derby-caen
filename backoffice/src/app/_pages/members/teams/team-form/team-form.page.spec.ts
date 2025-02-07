import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamFormPage } from './team-form.page';

describe('TeamFormPage', () => {
  let component: TeamFormPage;
  let fixture: ComponentFixture<TeamFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
