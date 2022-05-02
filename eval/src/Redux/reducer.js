

import { ADD_TODOS, UPDATE_TODO } from "./actions";
import { DELETE_TODO } from "./actions";

export const reducer = (store = {todos: []}, { type, payload }) => {
  switch (type) {

    case ADD_TODOS:
        return {...store,todos: payload};
    case DELETE_TODO:
        return {...store,todos: store.todos.filter(todos => todos.id !== payload)};
    case UPDATE_TODO:
        return {...store, todos: store.todos.map(todos => todos.id==payload? {...todos, status: !todos.status} : todos)}
    default:
      return store;
  }
};