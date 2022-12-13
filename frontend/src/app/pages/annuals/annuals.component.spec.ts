import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualsComponent } from './annuals.component';

describe('AnnualsComponent', () => {
  let component: AnnualsComponent;
  let fixture: ComponentFixture<AnnualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
