import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BothSideMenusContent } from './both-side-menus-content';

describe('BothSideMenusContent', () => {
  let component: BothSideMenusContent;
  let fixture: ComponentFixture<BothSideMenusContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BothSideMenusContent],
    }).compileComponents();

    fixture = TestBed.createComponent(BothSideMenusContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
