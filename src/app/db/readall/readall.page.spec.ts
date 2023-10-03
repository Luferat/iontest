import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadallPage } from './readall.page';

describe('ReadallPage', () => {
  let component: ReadallPage;
  let fixture: ComponentFixture<ReadallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
