import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadTopics, loadQuizzes } from '../store/ngrx.actions';
import { selectAllTopics, selectAllQuizzes, selectLoading } from '../store/ngrx.selectors';
import { NgrxQuiz, NgrxTopic } from '../models/ngrx.model';
import { TopicCardComponent } from '../../../shared/components/topic-card/topic-card.component';
import { QuizCardComponent } from '../../../shared/components/quiz-card/quiz-card.component';

@Component({
  selector: 'app-ngrx-page',
  standalone: true,
  templateUrl: './ngrx.page.html',
  styleUrl: './ngrx.page.scss',
  imports: [CommonModule, TopicCardComponent, QuizCardComponent],
})
export class NgrxPage implements OnInit {
  private store = inject(Store);

  public topics$: Observable<NgrxTopic[]> = this.store.select(selectAllTopics);
  public quizzes$: Observable<NgrxQuiz[]> = this.store.select(selectAllQuizzes);
  public loading$: Observable<boolean> = this.store.select(selectLoading);
  public activeTab: 'concepts' | 'flow' | 'quiz' | 'analogies' = 'concepts';

  ngOnInit(): void {
    this.store.dispatch(loadTopics());
    this.store.dispatch(loadQuizzes());
  }

  public selectTab(tab: 'concepts' | 'flow' | 'quiz' | 'analogies'): void {
    this.activeTab = tab;
  }
}
