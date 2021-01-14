import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourSelfComponent } from './add-your-self.component';

describe('AddYourSelfComponent', () => {
  let component: AddYourSelfComponent;
  let fixture: ComponentFixture<AddYourSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYourSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
