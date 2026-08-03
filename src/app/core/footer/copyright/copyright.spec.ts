import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Copyright} from './copyright';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('Copyright', () => {
  let component: Copyright;
  let fixture: ComponentFixture<Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Copyright
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Copyright);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
