import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfProductionComponent } from './end-of-production.component';

describe('EndOfProductionComponent', () => {
  let component: EndOfProductionComponent;
  let fixture: ComponentFixture<EndOfProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndOfProductionComponent]
    });
    fixture = TestBed.createComponent(EndOfProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
