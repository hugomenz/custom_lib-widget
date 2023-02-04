import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMobileComponent } from './world-mobile.component';

describe('WorldMobileComponent', () => {
  let component: WorldMobileComponent;
  let fixture: ComponentFixture<WorldMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
