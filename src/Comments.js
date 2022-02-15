import React from 'react';
import SingleComment from './SingleComment';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentLoad } from './redux/actions';
import uniqid from 'uniqid';

export default function Comments(props) {
  const [textComment, setTextComment] = React.useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    return state.commentsReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  React.useEffect(() => {
    dispatch(commentLoad());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput}></input>
        <input type="submit" hidden></input>
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}
