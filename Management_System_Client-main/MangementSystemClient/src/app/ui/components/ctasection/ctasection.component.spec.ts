import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtasectionComponent } from './ctasection.component';

describe('CtasectionComponent', () => {
  let component: CtasectionComponent;
  let fixture: ComponentFixture<CtasectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtasectionComponent]
    });
    fixture = TestBed.createComponent(CtasectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
