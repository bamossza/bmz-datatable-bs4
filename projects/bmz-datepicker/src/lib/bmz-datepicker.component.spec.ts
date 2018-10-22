import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmzDatepickerComponent } from './bmz-datepicker.component';

describe('BmzDatepickerComponent', () => {
  let component: BmzDatepickerComponent;
  let fixture: ComponentFixture<BmzDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmzDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmzDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
