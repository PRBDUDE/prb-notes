import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSsh } from './setup-ssh';

describe('SetupSsh', () => {
  let component: SetupSsh;
  let fixture: ComponentFixture<SetupSsh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupSsh],
    }).compileComponents();

    fixture = TestBed.createComponent(SetupSsh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
