import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmzUtilsComponent } from './bmz-utils.component';

describe('BmzUtilsComponent', () => {
  let component: BmzUtilsComponent;
  let fixture: ComponentFixture<BmzUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmzUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmzUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
