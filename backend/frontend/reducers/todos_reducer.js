import { RECEIVE_TODOS } from './../actions/todo_actions';
import { RECEIVE_TODO } from './../actions/todo_actions';
// import { REMOVE_TODO } from './..actions/todo_actions';

import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch ( action.type ) {
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
    // debugger
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    // case REMOVE_TODO:
    //   newState = merge({}, state);
    //   delete newState[action.todo.id];
    //   return newState;
    default:
      return state;
  }
};

export default todosReducer;
