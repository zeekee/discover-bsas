import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthRouteTwoComponent } from './south-route-two.component';

describe('SouthRouteTwoComponent', () => {
  let component: SouthRouteTwoComponent;
  let fixture: ComponentFixture<SouthRouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthRouteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
