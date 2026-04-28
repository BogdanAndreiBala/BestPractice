import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';
import { RxjsTopic, RxjsQuiz } from '../models/rxjs.model';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private http = inject(HttpClient);

  public getTopics(): Observable<RxjsTopic[]> {
    return this.http.get<RxjsTopic[]>(`${environment.apiUrl}/rxjs/topics`);
  }

  public getQuizzes(): Observable<RxjsQuiz[]> {
    return this.http.get<RxjsQuiz[]>(`${environment.apiUrl}/rxjs/quizzes`);
  }
}
