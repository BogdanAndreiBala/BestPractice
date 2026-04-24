import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuizCardComponent } from '../../../../shared/components/quiz-card/quiz-card.component';
import { RxjsQuiz } from '../../models/rxjs.model';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, QuizCardComponent],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent {
  @Input() quizzes: RxjsQuiz[] = [];
}
