import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CardBody } from './card-body';

@Component({
  standalone: true,
  imports: [CardBody],
  template: `<card-body><span>Test Content</span></card-body>`,
})
class TestHostComponent {}

describe('CardBody', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, CardBody],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create component', () => {
    const component = fixture.debugElement.children[0].componentInstance;
    expect(component).toBeTruthy();
  });

  it('should project content inside ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector('card-body span');
    expect(projectedElement).not.toBeNull();
    expect(projectedElement.textContent).toBe('Test Content');
  });
});
