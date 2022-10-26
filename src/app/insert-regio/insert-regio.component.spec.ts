import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRegioComponent } from './insert-regio.component';

describe('InsertRegioComponent', () => {
  let component: InsertRegioComponent;
  let fixture: ComponentFixture<InsertRegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertRegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
