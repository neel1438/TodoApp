import React, { Component } from 'react';
import Todos from './todos';

class TodoLayout extends Component {
  constructor(props) {
    super(props);
    this.todos = this.props.route.todos;
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    if (this.todoInput.value) {
      this.todos.store({
        isDone: false,
        description: this.todoInput.value,
        author: this.props.user,
      });
      this.todoForm.reset();
    }
  }
  render() {
    return (
      <div className="container" >
        <form ref={(ref) => { this.todoForm = ref; }} onSubmit={this.submitHandler} className="form-inline">
          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.todoInput = ref; }} id="exampleInputEmail1" type="text" placeholder="Enter a todo" />
          </div>
          <input type="submit" value="Submit" className="btn btn-info" />
        </form>
        <Todos todos={this.todos} user={this.props.user} />
      </div>
   );
  }
}

TodoLayout.propTypes = {
  route: React.PropTypes.object,
  todos: React.PropTypes.array,
  user: React.PropTypes.string,
};

export default TodoLayout;
