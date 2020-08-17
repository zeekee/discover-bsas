import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestRouteComponent } from './west-route.component';

describe('WestRouteComponent', () => {
  let component: WestRouteComponent;
  let fixture: ComponentFixture<WestRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
