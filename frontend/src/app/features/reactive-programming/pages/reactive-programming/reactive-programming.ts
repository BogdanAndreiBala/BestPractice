import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListComponent } from '../../../../shared/components/topic-list/topic-list.component';
import { QuizListComponent } from '../../../../shared/components/quiz-list/quiz-list.component';
import { AnalogiesListComponent } from '../../../../shared/components/analogies-list/analogies-list.component';

import { RxjsService } from '../../services/reactive-programming.service';
import { RxjsTopic, RxjsQuiz } from '../../models/rxjs.model';

@Component({
  selector: 'app-reactive-programming',
  standalone: true,
  imports: [CommonModule, TopicListComponent, QuizListComponent, AnalogiesListComponent],
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss'],
})
export class ReactiveProgrammingComponent implements OnInit {
  private rxjsService = inject(RxjsService);

  public topics: RxjsTopic[] = [];
  public quizzes: RxjsQuiz[] = [];
  public loading = false;
  public activeTab: 'topics' | 'quiz' | 'analogies' = 'topics';

  ngOnInit(): void {
    this.loading = true;

    this.rxjsService.getTopics().subscribe({
      next: (topics) => {
        this.topics = topics;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load RxJS topics', err);
        this.loading = false;
      },
    });

    this.rxjsService.getQuizzes().subscribe({
      next: (quizzes) => (this.quizzes = quizzes),
      error: (err) => console.error('Failed to load RxJS quizzes', err),
    });
  }

  public selectTab(tab: 'topics' | 'quiz' | 'analogies'): void {
    this.activeTab = tab;
  }
}
