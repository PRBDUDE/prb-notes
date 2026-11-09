import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeColors } from './code-colors';

describe('CodeColors', () => {
  let component: CodeColors;
  let fixture: ComponentFixture<CodeColors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeColors],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeColors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
