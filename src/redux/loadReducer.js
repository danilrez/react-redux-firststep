import { LOADER_OFF, LOADER_ON, ERROR_ON, ERROR_OFF } from './types';

const initialState = {
  loading: false,
  error: null,
};

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    case ERROR_ON:
      return {
        ...state,
        error: action.text,
      };

    case ERROR_OFF:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
