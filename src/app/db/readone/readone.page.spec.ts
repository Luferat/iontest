import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadonePage } from './readone.page';

describe('ReadonePage', () => {
  let component: ReadonePage;
  let fixture: ComponentFixture<ReadonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
