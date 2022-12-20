import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../slices/QuestionSlice';
import UserReducer from '../slices/UserSlice';

export const store = configureStore({
  reducer: {
    question: questionReducer,
    user: UserReducer,
  },
});
