import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseStatComponent} from './base-stat.component';

describe('BaseStatComponent', () => {
  let component: BaseStatComponent;
  let fixture: ComponentFixture<BaseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseStatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
