import { Component, Input } from '@angular/core';

import { RxjsTopic } from '../../../features/reactive-programming/models/rxjs.model';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [],
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
