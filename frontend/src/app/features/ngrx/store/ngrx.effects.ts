import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';
import { NgrxTopic, NgrxQuiz } from '../models/ngrx.model';
import {
  loadQuizzes,
  loadQuizzesFailure,
  loadQuizzesSuccess,
  loadTopics,
  loadTopicsFailure,
  loadTopicsSuccess,
} from './ngrx.actions';

@Injectable()
export class NgrxPageEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTopics),
      switchMap(() =>
        this.http.get<NgrxTopic[]>(`${environment.apiUrl}/ngrx/topics`).pipe(
          map((topics) => loadTopicsSuccess({ topics })),
          catchError((err) =>
            of(loadTopicsFailure({ error: err.message ?? 'Failed to load topics' })),
          ),
        ),
      ),
    ),
  );

  loadQuizzes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuizzes),
      switchMap(() =>
        this.http.get<NgrxQuiz[]>(`${environment.apiUrl}/ngrx/quizzes`).pipe(
          map((quizzes) => loadQuizzesSuccess({ quizzes })),
          catchError((err) =>
            of(loadQuizzesFailure({ error: err.message ?? 'Failed to load quizzes' })),
          ),
        ),
      ),
    ),
  );
}
