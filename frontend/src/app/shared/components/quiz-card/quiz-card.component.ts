import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  //TODO
  //resolve any
  @Input({ required: true }) quiz!: any;

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
