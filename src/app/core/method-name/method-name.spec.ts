import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodName } from './method-name';

describe('MethodName', () => {
  let component: MethodName;
  let fixture: ComponentFixture<MethodName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodName],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
