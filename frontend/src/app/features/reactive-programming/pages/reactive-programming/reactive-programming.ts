import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopicListComponent } from '../../components/topic-list/topic-list.component';
import { QuizListComponent } from '../../components/quiz-list/quiz-list.component';
import { AnalogiesListComponent } from '../../components/analogies-list/analogies-list.component';
import { inject } from '@angular/core';
import { RxjsTopic, RxjsQuiz } from '../../models/rxjs.model';
import { environment } from '../../../../../enviroments/enviroment';

@Component({
  selector: 'app-reactive-programming',
  standalone: true,
  imports: [CommonModule, TopicListComponent, QuizListComponent, AnalogiesListComponent],
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss'],
})
export class ReactiveProgrammingComponent implements OnInit {
  private http = inject(HttpClient);

  public topics: RxjsTopic[] = [];
  public quizzes: RxjsQuiz[] = [];
  public loading = false;
  public activeTab: 'topics' | 'quiz' | 'analogies' = 'topics';

  ngOnInit(): void {
    this.loading = true;

    this.http.get<RxjsTopic[]>(`${environment.apiUrl}/rxjs/topics`).subscribe((topics) => {
      this.topics = topics;
      this.loading = false;
    });

    this.http.get<RxjsQuiz[]>(`${environment.apiUrl}/rxjs/quizzes`).subscribe((quizzes) => {
      this.quizzes = quizzes;
    });
  }

  public selectTab(tab: 'topics' | 'quiz' | 'analogies'): void {
    this.activeTab = tab;
  }
}
