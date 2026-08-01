import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent4 } from './indent-4';

describe('Indent4', () => {
  let component: Indent4;
  let fixture: ComponentFixture<Indent4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent4],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
