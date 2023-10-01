import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopulatePage } from './populate.page';

describe('PopulatePage', () => {
  let component: PopulatePage;
  let fixture: ComponentFixture<PopulatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopulatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
