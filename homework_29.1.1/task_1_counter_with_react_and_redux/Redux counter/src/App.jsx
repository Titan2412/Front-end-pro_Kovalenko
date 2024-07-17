import React from 'react';
import './style/app.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/index.js';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  function increaseHandler() {
    dispatch(increment())
  }

  function decreaseHandler() {
    dispatch(decrement())
  }

  function resetHandler() {
    dispatch(reset())
  }

  return (
    <div className='counters'>
      <div>
        <p>Count: {count}</p>
      </div>
      <button className='button' onClick={increaseHandler}>+</button>
      <button className='button' onClick={decreaseHandler}>-</button>
      <button className='button' onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default App
