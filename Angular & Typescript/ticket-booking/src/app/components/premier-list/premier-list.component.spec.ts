import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierListComponent } from './premier-list.component';

describe('PremierListComponent', () => {
  let component: PremierListComponent;
  let fixture: ComponentFixture<PremierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
