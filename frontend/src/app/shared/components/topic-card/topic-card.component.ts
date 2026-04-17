import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
  //replace ANY later
  //TODO
  @Input({ required: true }) topic!: any;

  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
