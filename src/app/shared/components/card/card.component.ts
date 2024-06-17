import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  title: string | null = null;

  @Input()
  content: string | null = null;

  showMessage(): void {
    alert(this.title);
  }
}
