import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySshFileToPi } from './copy-ssh-file-to-pi';

describe('CopySshFileToPi', () => {
  let component: CopySshFileToPi;
  let fixture: ComponentFixture<CopySshFileToPi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi],
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
