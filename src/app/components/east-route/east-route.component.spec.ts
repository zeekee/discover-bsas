import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastRouteComponent } from './east-route.component';

describe('EastRouteComponent', () => {
  let component: EastRouteComponent;
  let fixture: ComponentFixture<EastRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
