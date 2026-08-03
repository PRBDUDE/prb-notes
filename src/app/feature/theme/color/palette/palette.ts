import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'prb-palette',
  imports: [],
  templateUrl: './palette.html',
  styleUrl: '../../theme.scss',
})
export class Palette implements OnInit {
  colorVariableName = input<string>('--color-header-background');
  bgColor: string = '';
  borderColor: string = '';
  hexColor: string = '';

  ngOnInit(): void {
    const rawColor = getComputedStyle(document.documentElement)
      .getPropertyValue(this.colorVariableName())
      .trim();

    this.bgColor = rawColor;

    this.borderColor = this.getInverseColor(rawColor);

    this.hexColor = this.formatToHex(rawColor);
  }

  /**
   * Accepts hex (#ffffff, #fff) or rgb(r, g, b) strings and returns the inverse RGB color.
   */
  private getInverseColor(color: string): string {
    // Temporary element to convert any valid CSS color string (hex, named, hsl) to standard rgb(r, g, b)
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return '#000000';

    ctx.fillStyle = color;
    const computedRgb = ctx.fillStyle; // Outputs formatted hex or rgb string

    // Extract numbers from hex (#rrggbb)
    if (computedRgb.startsWith('#')) {
      const hex = computedRgb.replace('#', '');
      const r = 255 - parseInt(hex.substring(0, 2), 16);
      const g = 255 - parseInt(hex.substring(2, 4), 16);
      const b = 255 - parseInt(hex.substring(4, 6), 16);
      return `rgb(${r}, ${g}, ${b})`;
    }

    return '#000000'; // Fallback
  }
  /**
   * Converts any valid CSS color string into a clean 6-digit hex string (#RRGGBB)
   */
  private formatToHex(color: string): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return '#000000';

    ctx.fillStyle = color;
    const computed = ctx.fillStyle; // Canvas standardizes fillStyle to standard hex (#rrggbb)

    if (computed.startsWith('#')) {
      // Ensure 6-digit hex format and uppercase output
      if (computed.length === 4) {
        const r = computed[1];
        const g = computed[2];
        const b = computed[3];
        return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
      }
      return computed.toUpperCase();
    }

    return '#000000'; // Fallback
  }
}
