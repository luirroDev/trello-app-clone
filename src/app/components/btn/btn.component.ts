import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  template: `
    <button
      [type]="typeBtn"
      class="w-full text-white font-medium rounded bg-[#0c66e4] px-5 py-3 hover:bg-[#0055cc]"
    >
      <ng-content />
    </button>
  `,
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
}
