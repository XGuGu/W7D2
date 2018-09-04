export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APIUtil from '../util/todo_api_util';

export const fetchTodos = () => {
  return (dispatch) => {
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};
};

export const addTodo = (todo) => {
  return (dispatch) => {
  APIUtil.addTodo(todo).then(todo => dispatch(receiveTodo(todo)));
};
};

export const receiveTodos = (todos) => {
  return {
     type: RECEIVE_TODOS,
     todos: todos
  };
};

export const receiveTodo = (todo) => {
  todo.id = Math.floor(Math.random() * 10000);
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};



window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
