import React from 'react';
import { commentUpdate, commentDelete } from './redux/actions';
import { useDispatch } from 'react-redux';

export default function SingleComment({ data }) {
  const [commentText, setCommentText] = React.useState('');

  const { comments, id } = data;
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  React.useEffect(() => {
    if (comments) setCommentText(comments);
  }, [comments]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('id > ', id);
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

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
