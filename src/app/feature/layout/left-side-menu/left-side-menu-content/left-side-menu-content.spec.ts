import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftSideMenuContent } from './left-side-menu-content';

describe('LeftSideMenuContent', () => {
  let component: LeftSideMenuContent;
  let fixture: ComponentFixture<LeftSideMenuContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideMenuContent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideMenuContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
