import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumFormPage } from './album-form.page';

describe('AlbumFormPage', () => {
  let component: AlbumFormPage;
  let fixture: ComponentFixture<AlbumFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
