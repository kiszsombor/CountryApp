import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountryComponent } from './filter-country.component';

describe('FilterCountryComponent', () => {
  let component: FilterCountryComponent;
  let fixture: ComponentFixture<FilterCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
