import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackViewComponent } from './attack-view.component';

describe('AttackViewComponent', () => {
  let component: AttackViewComponent;
  let fixture: ComponentFixture<AttackViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
