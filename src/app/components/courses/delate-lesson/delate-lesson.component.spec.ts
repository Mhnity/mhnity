import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateLessonComponent } from './delate-lesson.component';

describe('DelateLessonComponent', () => {
  let component: DelateLessonComponent;
  let fixture: ComponentFixture<DelateLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
