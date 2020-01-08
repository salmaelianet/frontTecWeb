import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOfActorComponent } from './movies-of-actor.component';

describe('MoviesOfActorComponent', () => {
  let component: MoviesOfActorComponent;
  let fixture: ComponentFixture<MoviesOfActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesOfActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOfActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
