import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegioComponent } from './delete-regio.component';

describe('DeleteRegioComponent', () => {
  let component: DeleteRegioComponent;
  let fixture: ComponentFixture<DeleteRegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
