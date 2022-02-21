import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsHeaderComponent } from './seats-header.component';

describe('SeatsHeaderComponent', () => {
  let component: SeatsHeaderComponent;
  let fixture: ComponentFixture<SeatsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
