import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoSideMenuContent } from './no-side-menu-content';

describe('NoSideMenuContent', () => {
  let component: NoSideMenuContent;
  let fixture: ComponentFixture<NoSideMenuContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSideMenuContent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoSideMenuContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
