import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridLayoutContent } from './grid-layout-content';

describe('GridLayoutContent', () => {
  let component: GridLayoutContent;
  let fixture: ComponentFixture<GridLayoutContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutContent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridLayoutContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
