import { createReducer, on } from '@ngrx/store';
import { initialState } from './ngrx.state';
import {
  loadQuizzes,
  loadQuizzesFailure,
  loadQuizzesSuccess,
  loadTopics,
  loadTopicsFailure,
  loadTopicsSuccess,
} from './ngrx.actions';

export const ngrxPageReducer = createReducer(
  initialState,
  on(loadTopics, loadQuizzes, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadTopicsSuccess, (state, { topics }) => ({
    ...state,
    loading: false,
    topics,
  })),

  on(loadQuizzesSuccess, (state, { quizzes }) => ({
    ...state,
    loading: false,
    quizzes,
  })),

  on(loadTopicsFailure, loadQuizzesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
