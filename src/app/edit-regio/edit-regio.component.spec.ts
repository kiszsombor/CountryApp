import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegioComponent } from './edit-regio.component';

describe('EditRegioComponent', () => {
  let component: EditRegioComponent;
  let fixture: ComponentFixture<EditRegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
