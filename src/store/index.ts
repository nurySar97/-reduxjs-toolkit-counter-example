import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter.reducer'
import todoReducer from './reducers/todo.reducer';
import switchReducer from './reducers/switch.reducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        switch: switchReducer
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store['getState']>;
export type AppDispatch = typeof store['dispatch'];
