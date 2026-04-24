import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsQuiz } from '../../../features/reactive-programming/models/rxjs.model';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  @Input({ required: true }) quiz!: RxjsQuiz;

  selectedAnswer: number | null = null;
  isRevealed = false;

  get isCorrect(): boolean {
    return this.selectedAnswer === this.quiz?.correctIndex;
  }

  selectAnswer(index: number): void {
    if (!this.isRevealed) {
      this.selectedAnswer = index;
    }
  }

  revealExplanation(): void {
    if (this.selectedAnswer !== null) {
      this.isRevealed = true;
    }
  }
}
