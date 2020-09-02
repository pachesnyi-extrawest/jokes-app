import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDetailsPageComponent } from './joke-details-page.component';

describe('JokeDetailsPageComponent', () => {
  let component: JokeDetailsPageComponent;
  let fixture: ComponentFixture<JokeDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
