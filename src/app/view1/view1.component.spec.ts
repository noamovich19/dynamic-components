import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Component } from './view1.component';

describe('View2Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
