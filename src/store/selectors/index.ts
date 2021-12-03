import { RootState } from "..";

export const getCount = (state: RootState) => state.counter.count
export const getTodos = (state: RootState) => state.todo.todos
export const getIsOpen = (state: RootState) => state.switch.isOpen