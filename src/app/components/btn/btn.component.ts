import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="typeBtn"
      class="w-full text-white font-medium rounded px-5 py-3"
      [ngClass]="colors"
    >
      <ng-content />
    </button>
  `,
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color!: 'primary' | 'danger';

  get colors() {
    return {
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-700': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-danger-600': this.color === 'danger',
      'hover:bg-danger-700': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',
    };
  }
}
