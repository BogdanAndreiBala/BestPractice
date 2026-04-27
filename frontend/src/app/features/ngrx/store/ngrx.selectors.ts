import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgrxPageState } from './ngrx.state';

export const selectNgrxPageState = createFeatureSelector<NgrxPageState>('ngrxPage');

export const selectAllTopics = createSelector(selectNgrxPageState, (state) => state.topics);
export const selectAllQuizzes = createSelector(selectNgrxPageState, (state) => state.quizzes);
export const selectLoading = createSelector(selectNgrxPageState, (state) => state.loading);
export const selectError = createSelector(selectNgrxPageState, (state) => state.error);
