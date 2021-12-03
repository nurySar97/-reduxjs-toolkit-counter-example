import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks'

import { decrement, increment, incrementByAmount } from './store/reducers/counter.reducer'
import { getCount } from './store/selectors';

function App() {
  const [value, setValue] = useState<string>("0")
  const count = useAppSelector(getCount)
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

  return (
    <div className="wrapper">
      <h1>Count {count}</h1>
      <p><button onClick={incrementHandler}>Increment</button></p>
      <p><button onClick={decrementHandler}>Decrement</button></p>

      <h2>Increase By Amount</h2>
      <p><input value={value} onChange={e => setValue(e.target.value)} type="number" /></p>
      <p><button onClick={incrementByAmountHandler}>Increase</button></p>
    </div>
  );
}

export default App;
