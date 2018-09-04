import { uniqueId } from './../../util/util';
import React from 'react';



class TodoForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    // debugger
    this.props.addTodo({todo}).then(
      () => this.setState({title: '', body: ''})
    );
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            rows="8"
            cols="80"
            value={this.state.body}
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button>Create Todo!</button>
      </form>
    );
    //
  }

}

export default TodoForm;
