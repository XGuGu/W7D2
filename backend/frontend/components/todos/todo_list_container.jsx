import { connect } from 'react-redux';
import TodoList from './todo_list';
import {receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos } from '../../actions/todo_actions';
import { addTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
