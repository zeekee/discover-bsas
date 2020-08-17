import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastRouteTwoComponent } from './east-route-two.component';

describe('EastRouteTwoComponent', () => {
  let component: EastRouteTwoComponent;
  let fixture: ComponentFixture<EastRouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastRouteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
