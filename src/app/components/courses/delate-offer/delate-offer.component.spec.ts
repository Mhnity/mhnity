import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateOfferComponent } from './delate-offer.component';

describe('DelateOfferComponent', () => {
  let component: DelateOfferComponent;
  let fixture: ComponentFixture<DelateOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
