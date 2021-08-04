import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxReactiveComponent } from './ngrx-reactive.component';

describe('NgrxReactiveComponent', () => {
  let component: NgrxReactiveComponent;
  let fixture: ComponentFixture<NgrxReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
