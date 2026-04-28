import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { SignalsService } from '../services/signals.service';
import { SignalsTopic, SignalsQuiz } from '../models/signals.model';

import { TopicListComponent } from '../../../shared/components/topic-list/topic-list.component';
import { QuizListComponent } from '../../../shared/components/quiz-list/quiz-list.component';
import { AnalogiesListComponent } from '../../../shared/components/analogies-list/analogies-list.component';

@Component({
  selector: 'app-signals-page',
  standalone: true,
  imports: [CommonModule, TopicListComponent, QuizListComponent, AnalogiesListComponent],
  templateUrl: './signals.page.html',
  styleUrl: './signals.page.scss',
})
export class SignalsPage {
  private signalsService = inject(SignalsService);

  public topics = toSignal(this.signalsService.getTopics(), { initialValue: [] as SignalsTopic[] });
  public isTopicsLoading = computed(() => this.topics().length === 0);

  public quizzes = toSignal(this.signalsService.getQuizzes(), {
    initialValue: [] as SignalsQuiz[],
  });

  public activeTab = signal<'topics' | 'quiz' | 'analogies'>('topics');

  public selectTab(tab: 'topics' | 'quiz' | 'analogies'): void {
    this.activeTab.set(tab);
  }
}
