import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrdComponent } from './total-ord.component';

describe('TotalOrdComponent', () => {
  let component: TotalOrdComponent;
  let fixture: ComponentFixture<TotalOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
