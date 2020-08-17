import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthRouteComponent } from './south-route.component';

describe('SouthRouteComponent', () => {
  let component: SouthRouteComponent;
  let fixture: ComponentFixture<SouthRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
