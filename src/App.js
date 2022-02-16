import React from 'react';
import { useSelector } from 'react-redux';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';
import './App.css';

function App() {
  const error = useSelector((state) => state.loadReducer.error);

  return (
    <div className="main">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
