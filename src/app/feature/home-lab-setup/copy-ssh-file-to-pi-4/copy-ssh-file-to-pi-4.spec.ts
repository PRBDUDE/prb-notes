import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySshFileToPi4 } from './copy-ssh-file-to-pi-4';

describe('CopySshFileToPi4', () => {
  let component: CopySshFileToPi4;
  let fixture: ComponentFixture<CopySshFileToPi4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi4],
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
