import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontEndSubMenu } from './micro-front-end-sub-menu';

describe('MicroFrontEndSubMenu', () => {
  let component: MicroFrontEndSubMenu;
  let fixture: ComponentFixture<MicroFrontEndSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFrontEndSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroFrontEndSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
