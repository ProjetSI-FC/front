import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPageComponent } from './result-page.component';

describe('SecondaryPageComponent', () => {
  let component: SecondaryPageComponent;
  let fixture: ComponentFixture<SecondaryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryPageComponent]
    });
    fixture = TestBed.createComponent(SecondaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
