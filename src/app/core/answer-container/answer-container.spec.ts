import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerContainer } from './answer-container';

describe('AnswerContainer', () => {
  let component: AnswerContainer;
  let fixture: ComponentFixture<AnswerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
