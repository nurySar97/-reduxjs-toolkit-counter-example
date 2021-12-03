import { AppDispatch } from "..";
import { setTodo } from './../reducers/todo.reducer'

export const getTodoThunk = (id: number = 1) => async (dispatch: AppDispatch) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();
        dispatch(setTodo(data))
    } catch (error) {
        console.error(error)
    }
}