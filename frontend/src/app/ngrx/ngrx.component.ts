import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTopics } from './ngrx.actions';
import { selectAllTopics, selectLoading } from './ngrx.selectors';
import { NgrxQuiz, NgrxTopic } from './ngrx.types';
import { TopicCardComponent } from '../shared/components/topic-card/topic-card.component';
import { QuizCardComponent } from '../shared/components/quiz-card/quiz-card.component';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
  imports: [CommonModule, TopicCardComponent, QuizCardComponent],
})
export class NgrxComponent implements OnInit {
  private store = inject(Store);
  private http = inject(HttpClient);

  topics$: Observable<NgrxTopic[]> = this.store.select(selectAllTopics);
  loading$: Observable<any> = this.store.select(selectLoading);
  quizzes: NgrxQuiz[] = [];

  activeTab: 'concepts' | 'flow' | 'quiz' | 'analogies' = 'concepts';

  ngOnInit(): void {
    this.store.dispatch(loadTopics());
    this.http
      .get<NgrxQuiz[]>('http://localhost:3000/ngrx/quizzes')
      .subscribe((quizzes) => (this.quizzes = quizzes));
  }

  selectTab(tab: 'concepts' | 'flow' | 'quiz' | 'analogies'): void {
    this.activeTab = tab;
  }
}
