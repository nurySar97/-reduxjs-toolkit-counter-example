import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter.reducer'
import todoReducer from './reducers/todo.reducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store['getState']>;
export type AppDispatch = typeof store['dispatch'];
