import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { TopicCardComponent } from '../topic-card/topic-card.component';
import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsTopic } from '../../../features/reactive-programming/models/rxjs.model';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [ReactiveFormsModule, TopicCardComponent],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit, OnChanges {
  @Input() topics: RxjsTopic[] = [];
  @Input() loading = false;
  private destroyRef = inject(DestroyRef);

  searchControl = new FormControl('');
  filteredTopics: RxjsTopic[] = [];

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(150),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value) => {
        this.filterTopics(value as string);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['topics']) {
      this.filterTopics(this.searchControl.value as string);
    }
  }

  private filterTopics(searchTerm: string): void {
    const normalized = String(searchTerm ?? '')
      .trim()
      .toLowerCase();

    this.filteredTopics = this.topics.filter((topic) =>
      topic.title.toLowerCase().includes(normalized),
    );
  }
}
