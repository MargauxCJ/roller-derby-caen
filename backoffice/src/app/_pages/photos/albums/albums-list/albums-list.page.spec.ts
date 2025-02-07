import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsListPage } from './albums-list.page';

describe('AlbumsListPage', () => {
  let component: AlbumsListPage;
  let fixture: ComponentFixture<AlbumsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
