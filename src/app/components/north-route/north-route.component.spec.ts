import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthRouteComponent } from './north-route.component';

describe('NorthRouteComponent', () => {
  let component: NorthRouteComponent;
  let fixture: ComponentFixture<NorthRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
