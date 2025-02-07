import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFormPage } from './event-form.page';

describe('EventsFormPage', () => {
  let component: EventFormPage;
  let fixture: ComponentFixture<EventFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
