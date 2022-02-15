import { INPUT_TEXT } from './types';
const initialState = {
  comment: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
