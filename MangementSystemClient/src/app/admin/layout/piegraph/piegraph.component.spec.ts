import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiegraphComponent } from './piegraph.component';

describe('PiegraphComponent', () => {
  let component: PiegraphComponent;
  let fixture: ComponentFixture<PiegraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiegraphComponent]
    });
    fixture = TestBed.createComponent(PiegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
