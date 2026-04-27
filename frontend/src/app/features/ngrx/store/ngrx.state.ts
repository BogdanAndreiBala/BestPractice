import { NgrxTopic, NgrxQuiz } from '../models/ngrx.model';

export interface NgrxPageState {
  topics: NgrxTopic[];
  quizzes: NgrxQuiz[];
  loading: boolean;
  error: string | null;
}

export const initialState: NgrxPageState = {
  topics: [],
  quizzes: [],
  loading: false,
  error: null,
};
