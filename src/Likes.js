import React from 'react';
import { connect } from 'react-redux';
import { incLikes, disLikes } from './redux/actions';

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncLikes}>❤ {props.likes}</button>
      <button onClick={props.onDisLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    likes: state.likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncLikes: () => dispatch(incLikes()),
    onDisLikes: () => dispatch(disLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
