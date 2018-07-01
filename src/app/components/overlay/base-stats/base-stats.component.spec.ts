import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStatsComponent } from './base-stats.component';

describe('BaseStatsComponent', () => {
  let component: BaseStatsComponent;
  let fixture: ComponentFixture<BaseStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
