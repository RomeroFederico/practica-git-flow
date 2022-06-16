import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { holaMundo } from './redux/actions';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const viewHolaMundo = useSelector(state => state.holaMundo); 

  let handleClick = function() {
    dispatch(holaMundo());
  }

  return (
    <div className="App">
      <button onClick = {handleClick}>Toggle Hola Mundo</button>
      {
        viewHolaMundo && <h1>Hola Mundo</h1>
      }
    </div>
  );
}

export default App;
