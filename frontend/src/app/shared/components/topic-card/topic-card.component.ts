import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTopic } from '../../../features/reactive-programming/models/rxjs.model';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
  @Input({ required: true }) topic!: RxjsTopic;

  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
