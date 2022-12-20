import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepQuestion: 0,
  selectedQuestions: [],
  selectedSrc: [],
};

export const QuestionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    incrementStepQuestion: (state) => {
      state.stepQuestion += 1;
    },
    decrementStepQuestion: (state) => {
      state.stepQuestion -= 1;
      state.selectedQuestions.pop();
    },
    addSelectedQuestion: (state, action) => {
      state.selectedQuestions.push({
        title: action.payload.title,
        variant: action.payload.variant,
        select: action.payload.select,
        id: action.payload.id,
      });
    },
    clearAll: (state) => {
      state.stepQuestion = 0;
      state.selectedQuestions = [];
      state.selectedSrc = [];
    },
    addSelectedSrc: (state, action) => {
      state.selectedSrc.push(action.payload);
    },
  },
});

export const {
  incrementStepQuestion,
  decrementStepQuestion,
  addSelectedQuestion,
  addSelectedSrc,
  clearAll,
} = QuestionSlice.actions;

export default QuestionSlice.reducer;
