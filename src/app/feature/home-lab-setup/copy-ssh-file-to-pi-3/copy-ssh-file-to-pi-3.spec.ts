import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySshFileToPi3 } from './copy-ssh-file-to-pi-3';

describe('CopySshFileToPi3', () => {
  let component: CopySshFileToPi3;
  let fixture: ComponentFixture<CopySshFileToPi3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi3],
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
