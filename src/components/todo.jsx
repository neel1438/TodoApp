import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.todos = this.props.todos;
    this.onChangeHandler = this.onChangeHandler.bind(this, this.props.data);
  }
  onChangeHandler(todo) {
    const newTodo = todo;
    newTodo.isDone = !todo.isDone;
    this.todos.replace(newTodo);
  }
  classes() {
    if (this.props.data.isDone) {
      return 'col-xs-11 strike';
    }
    return 'col-xs-11';
  }
  render() {
    return (
      <div className="row todo-row">
        <div className="col-xs-1">
          <input ref={(ref) => { this.toggleDone = ref; }} onChange={this.onChangeHandler} type="checkbox" checked={this.props.data.isDone} />
        </div>
        <div className={this.classes()}>
          {this.props.data.description}
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  data: React.PropTypes.shape({
    description: React.PropTypes.string,
    isDone: React.PropTypes.bool,
  }),
  todos: React.PropTypes.object,
};
export default Todo;
