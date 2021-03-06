import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
  count: number;
}

const initialState = {
  count: 0,
} as ICounterState;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: PayloadAction<any>) {
      state.count += +action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
