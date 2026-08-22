import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssClass } from './css-class';
import { CssProperty } from './css-property';

describe('CssClass Component', () => {
  let component: CssClass;
  let fixture: ComponentFixture<CssClass>;
  let componentRef: ComponentRef<CssClass>;

  const mockProperties: CssProperty[] = [
    { property: 'color', value: 'red' },
    { property: 'display', value: 'flex' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssClass],
    }).compileComponents();

    fixture = TestBed.createComponent(CssClass);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Set required signal inputs before change detection
    componentRef.setInput('className', 'container');
    componentRef.setInput('properties', mockProperties);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly receive signal inputs', () => {
    expect(component.className()).toBe('container');
    expect(component.properties()).toEqual(mockProperties);
  });

  it('should update signal inputs when setInput is called', () => {
    const updatedProps: CssProperty[] = [{ property: 'margin', value: '0' }];

    componentRef.setInput('className', 'card');
    componentRef.setInput('properties', updatedProps);
    fixture.detectChanges();

    expect(component.className()).toBe('card');
    expect(component.properties()).toEqual(updatedProps);
  });

  it('should expose the Array reference in protected property', () => {
    // Accessing protected property via type assertion for assertion check
    expect((component as any).Array).toBe(Array);
  });
});
