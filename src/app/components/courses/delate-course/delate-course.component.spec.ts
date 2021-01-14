import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCourseComponent } from './delate-course.component';

describe('DelateCourseComponent', () => {
  let component: DelateCourseComponent;
  let fixture: ComponentFixture<DelateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
