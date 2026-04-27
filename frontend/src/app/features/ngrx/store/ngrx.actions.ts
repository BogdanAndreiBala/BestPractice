import { createAction, props } from '@ngrx/store';
import { NgrxTopic, NgrxQuiz } from '../models/ngrx.model';

//Topic
export const loadTopics = createAction('[NgRx Page] Load Topics');
export const loadTopicsSuccess = createAction(
  '[NgRx API] Load Topics Success',
  props<{ topics: NgrxTopic[] }>(),
);
export const loadTopicsFailure = createAction(
  '[NgRx API] Load Topics Failure',
  props<{ error: string }>(),
);

//Quiz
export const loadQuizzes = createAction('[NgRx Page] Load Quizzes');
export const loadQuizzesSuccess = createAction(
  '[NgRx API] Load Quizzes Success',
  props<{ quizzes: NgrxQuiz[] }>(),
);
export const loadQuizzesFailure = createAction(
  '[NgRx API] Load Quizzes Failure',
  props<{ error: string }>(),
);
