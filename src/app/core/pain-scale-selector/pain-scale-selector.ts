import { Component, ModelSignal, model } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PainLevel {
  value: number;
  label: string;
  svgPath: string;
}

@Component({
  imports: [CommonModule],
  selector: 'prb-pain-scale-selector',
  styleUrl: './pain-scale-selector.scss',
  templateUrl: './pain-scale-selector.html',
})
export class PainScaleSelector {
  // Model signal returning exclusively the selected numeric pain index (1-10)
  readonly selectedPainLevel: ModelSignal<number | null> = model<number | null>(null);

  readonly painLevels: PainLevel[] = [
    { value: 1, label: 'No Pain', svgPath: 'M 7 14 Q 12 18 17 14' },
    { value: 2, label: 'Mild', svgPath: 'M 7 15 Q 12 17.5 17 15' },
    { value: 3, label: 'Discomfort', svgPath: 'M 7 15.5 Q 12 16.5 17 15.5' },
    { value: 4, label: 'Moderate', svgPath: 'M 7 15.5 L 17 15.5' },
    { value: 5, label: 'Distressing', svgPath: 'M 7 16 Q 12 15 17 16' },
    { value: 6, label: 'Intense', svgPath: 'M 7 16.5 Q 12 14.5 17 16.5' },
    { value: 7, label: 'Severe', svgPath: 'M 7 17 Q 12 13 17 17' },
    { value: 8, label: 'Very Severe', svgPath: 'M 7 17.5 Q 12 12 17 17.5' },
    { value: 9, label: 'Horrible', svgPath: 'M 7 18 Q 12 11 17 18' },
    { value: 10, label: 'Unbearable', svgPath: 'M 8 18 Q 12 10 16 18 Z' },
  ];

  selectLevel(level: number): void {
    this.selectedPainLevel.set(level);
  }

  getHue(level: number): number {
    return Math.max(0, 120 - (level - 1) * 13.33);
  }
}
