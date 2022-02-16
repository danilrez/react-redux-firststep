import React from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions';

export default function SingleComment({ data }) {
  const [commentText, setCommentText] = React.useState('');
  const { comment, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  console.log(data);

  React.useEffect(() => {
    if (comment) setCommentText(comment);
  }, [comment]);

  const handleInput = (e) => setCommentText(e.target.value);

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput}></input>
      <input type="submit" hidden></input>
    </form>
  );
}
