import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent } from './indent';

describe('Indent', () => {
  let component: Indent;
  let fixture: ComponentFixture<Indent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
