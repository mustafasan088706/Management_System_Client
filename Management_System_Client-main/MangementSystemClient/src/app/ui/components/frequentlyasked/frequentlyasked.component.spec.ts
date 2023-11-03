import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyaskedComponent } from './frequentlyasked.component';

describe('FrequentlyaskedComponent', () => {
  let component: FrequentlyaskedComponent;
  let fixture: ComponentFixture<FrequentlyaskedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentlyaskedComponent]
    });
    fixture = TestBed.createComponent(FrequentlyaskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
