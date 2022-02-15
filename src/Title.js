import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';

export default function Title(props) {
  const comment = useSelector((state) => {
    return state.inputReducer.comment;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{comment}</p>
    </div>
  );
}
