import { Component, Input } from '@angular/core';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';
import { RxjsQuiz } from '../../../features/reactive-programming/models/rxjs.model';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [QuizCardComponent],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent {
  @Input() quizzes: RxjsQuiz[] = [];
}
