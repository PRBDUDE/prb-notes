import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWord } from './key-word';

describe('KeyWord', () => {
  let component: KeyWord;
  let fixture: ComponentFixture<KeyWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyWord],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyWord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
