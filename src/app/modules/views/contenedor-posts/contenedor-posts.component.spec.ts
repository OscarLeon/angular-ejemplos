import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPostsComponent } from './contenedor-posts.component';

describe('ContenedorPostsComponent', () => {
  let component: ContenedorPostsComponent;
  let fixture: ComponentFixture<ContenedorPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
