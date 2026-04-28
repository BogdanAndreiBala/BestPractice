import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';
import { SignalsTopic, SignalsQuiz } from '../models/signals.model';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  private http = inject(HttpClient);

  public getTopics(): Observable<SignalsTopic[]> {
    return this.http.get<SignalsTopic[]>(`${environment.apiUrl}/signals/topics`);
  }

  public getQuizzes(): Observable<SignalsQuiz[]> {
    return this.http.get<SignalsQuiz[]>(`${environment.apiUrl}/signals/quizzes`);
  }
}
