import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthRouteTwoComponent } from './north-route-two.component';

describe('NorthRouteTwoComponent', () => {
  let component: NorthRouteTwoComponent;
  let fixture: ComponentFixture<NorthRouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthRouteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
