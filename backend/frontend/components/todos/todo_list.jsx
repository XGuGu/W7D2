import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    // debugger
    const { todos, receiveTodo, addTodo } = this.props;
    // this.props.todos, this.props.receiveTodo, this.props.addTodo
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo }
           />
      )
    );
    return (
      <div>
          <h3>Todo List is here!</h3>
          <ul>
            { todoItems }
          </ul>
          <TodoForm
            receiveTodo={ receiveTodo }
            addTodo={ addTodo }
            />
      </div>
    );
  }
}

export default TodoList;
