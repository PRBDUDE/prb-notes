import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleService } from './idle-service';

describe('IdleService', () => {
  let component: IdleService;
  let fixture: ComponentFixture<IdleService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleService],
    }).compileComponents();

    fixture = TestBed.createComponent(IdleService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
