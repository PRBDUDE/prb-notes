import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySshFileToPi2 } from './copy-ssh-file-to-pi-2';

describe('CopySshFileToPi2', () => {
  let component: CopySshFileToPi2;
  let fixture: ComponentFixture<CopySshFileToPi2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi2],
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
