import { COMMENT_CREATE } from './types';
import { errorOn } from './actions';

const badWords = ['говнюк', 'козел', 'осел', 'дурак'];

export function spamFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((res) => action.data.comment.includes(res));
        if (hasBadWords) {
          return dispatch(errorOn('Не грубите!'));
        }
      }
      return next(action);
    };
  };
}
