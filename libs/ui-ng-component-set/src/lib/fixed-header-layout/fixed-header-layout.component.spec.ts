import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedHeaderLayoutComponent } from './fixed-header-layout.component';

describe('FixedHeaderLayoutComponent', () => {
  let component: FixedHeaderLayoutComponent;
  let fixture: ComponentFixture<FixedHeaderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedHeaderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
