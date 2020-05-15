import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerBciComponent } from './challenger-bci.component';

describe('ChallengerBciComponent', () => {
  let component: ChallengerBciComponent;
  let fixture: ComponentFixture<ChallengerBciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerBciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerBciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
