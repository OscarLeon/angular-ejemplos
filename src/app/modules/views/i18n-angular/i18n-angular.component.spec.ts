import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nAngularComponent } from './i18n-angular.component';

describe('I18nAngularComponent', () => {
  let component: I18nAngularComponent;
  let fixture: ComponentFixture<I18nAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
