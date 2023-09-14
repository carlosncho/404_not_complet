import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ee404Page } from './ee404.page';

describe('Ee404Page', () => {
  let component: Ee404Page;
  let fixture: ComponentFixture<Ee404Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ee404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
