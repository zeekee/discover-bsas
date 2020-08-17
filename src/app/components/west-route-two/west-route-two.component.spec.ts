import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestRouteTwoComponent } from './west-route-two.component';

describe('WestRouteTwoComponent', () => {
  let component: WestRouteTwoComponent;
  let fixture: ComponentFixture<WestRouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestRouteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
