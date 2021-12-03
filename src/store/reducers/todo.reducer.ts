import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodoItem {
    userId?: number,
    id: number,
    title: string,
    completed: boolean
}

interface ITodoState {
    todos: ITodoItem[];
}

const initialState: ITodoState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo(state, action: PayloadAction<ITodoItem>) {
            state.todos.push(action.payload)
        }
    },
});

export const { setTodo } = todoSlice.actions

export default todoSlice.reducer
