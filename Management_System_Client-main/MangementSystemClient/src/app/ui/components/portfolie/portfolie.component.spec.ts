import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolieComponent } from './portfolie.component';

describe('PortfolieComponent', () => {
  let component: PortfolieComponent;
  let fixture: ComponentFixture<PortfolieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolieComponent]
    });
    fixture = TestBed.createComponent(PortfolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
