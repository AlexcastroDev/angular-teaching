import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomModuleComponent } from './random-module.component';

describe('RandomModuleComponent', () => {
  let component: RandomModuleComponent;
  let fixture: ComponentFixture<RandomModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
