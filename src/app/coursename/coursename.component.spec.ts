import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenameComponent } from './coursename.component';

describe('CoursenameComponent', () => {
  let component: CoursenameComponent;
  let fixture: ComponentFixture<CoursenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
