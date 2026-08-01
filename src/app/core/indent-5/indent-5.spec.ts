import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent5 } from './indent-5';

describe('Indent5', () => {
  let component: Indent5;
  let fixture: ComponentFixture<Indent5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent5],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
