import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeText } from './code-text';

describe('CodeText', () => {
  let component: CodeText;
  let fixture: ComponentFixture<CodeText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeText],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
