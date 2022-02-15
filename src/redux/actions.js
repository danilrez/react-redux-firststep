import {
  INC,
  DEC,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_ON,
  LOADER_OFF,
  ERROR_ON,
  ERROR_OFF,
} from './types';

export const incLikes = () => {
  return {
    type: INC,
  };
};

export const disLikes = () => {
  return {
    type: DEC,
  };
};

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    comment: text,
  };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { comments: text, id: id },
  };
};

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { comments: text, id: id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    id: id,
  };
};

export const commentLoad = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?_limit=10'
      ).then((response) => response.json());

      setTimeout(() => {
        dispatch({
          type: COMMENTS_LOAD,
          data: response,
        });
        dispatch(loaderOff());
      }, 1000);
    } catch (err) {
      console.log();
      dispatch(errorOn(`Ошибка API: ${err.message}`));
      dispatch(loaderOff());
    }
  };
};

export const loaderOn = () => {
  return {
    type: LOADER_ON,
  };
};

export const loaderOff = () => {
  return {
    type: LOADER_OFF,
  };
};

export const errorOn = (text) => {
  return (dispatch) => {
    dispatch({
      type: ERROR_ON,
      text,
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 3000);
  };
};

export const errorOff = () => {
  return {
    type: ERROR_OFF,
  };
};
