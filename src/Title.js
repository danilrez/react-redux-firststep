import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';

export default function Title(props) {
  const [textComment, setTextComment] = React.useState('');
  const comment = useSelector((state) => {
    return state.inputReducer.comment;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputText(textComment));
    setTextComment('');
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <form onSubmit={handleSubmit} className="comments-item-create">
          <input type="text" value={textComment} onChange={handleChange} />
          {/* <input type="submit" hidden /> */}
        </form>
      </div>

      <p>{comment}</p>
    </div>
  );
}
