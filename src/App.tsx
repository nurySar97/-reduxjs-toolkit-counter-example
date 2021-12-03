import { useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks'

import { decrement, increment, incrementByAmount } from './store/reducers/counter.reducer'
import { getCount, getTodos } from './store/selectors';
import { getTodoThunk } from './store/thunks';

function App() {
  const counter = useRef<number>(1)
  const [value, setValue] = useState<string>("0")
  const count = useAppSelector(getCount)
  const todos = useAppSelector(getTodos)
  const dispatch = useAppDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(value))
  }

  const getTodoHandler = () => {
    dispatch(getTodoThunk(counter.current))
    ++counter.current
  }

  return (
    <div className="wrapper">
      <div className="counter">
        <h1>Count {count}</h1>
        <p><button onClick={incrementHandler}>Increment</button></p>
        <p><button onClick={decrementHandler}>Decrement</button></p>

        <h2>Increase By Amount</h2>
        <p><input value={value} onChange={e => setValue(e.target.value)} type="number" /></p>
        <p><button onClick={incrementByAmountHandler}>Increase</button></p>


      </div>
      <hr />

      <div className="todo">
        <div className='todo__header'>
          <button onClick={getTodoHandler}>Get Todo</button>
        </div>
        <div className="cards">
          {
            !!todos.length ? todos.map(({ id, title }) => {
              return (<div className="card" key={id}>
                <div className="card__title">{title}</div>
              </div>)
            })
              :
              <div className="text-align-center">No todos yet!</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
