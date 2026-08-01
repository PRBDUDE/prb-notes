import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent2 } from './indent-2';

describe('Indent2', () => {
  let component: Indent2;
  let fixture: ComponentFixture<Indent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent2],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
