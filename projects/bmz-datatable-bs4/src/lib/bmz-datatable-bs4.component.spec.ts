import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmzDatatableBs4Component } from './bmz-datatable-bs4.component';

describe('BmzDatatableBs4Component', () => {
  let component: BmzDatatableBs4Component;
  let fixture: ComponentFixture<BmzDatatableBs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmzDatatableBs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmzDatatableBs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
