import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ClassName } from './class-name';

@Component({
  template: `<class-name><p data-testid="content">Hello World</p></class-name>`,
  imports: [ClassName],
})
class TestHostComponent {}

describe('ClassName', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ClassName],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const classInstance = fixture.debugElement.children[0].componentInstance;
    expect(classInstance).toBeTruthy();
  });

  it('should render projected content', () => {
    const projectedElement = fixture.nativeElement.querySelector('[data-testid="content"]');
    expect(projectedElement).not.toBeNull();
    expect(projectedElement.textContent).toBe('Hello World');
  });
});
