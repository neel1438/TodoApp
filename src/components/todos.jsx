import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.todos = props.todos;
    this.state = {
      todos: [],
    };
    this.todosObservable = this.todos.watch();
  }
  componentDidMount() {
    this.todosObservable.subscribe(
      (todos) => {
        this.setState({ todos });
      }
    );
  }
  render() {
    const jsx = this.state.todos.map((todo, i) => <Todo data={todo} todos={this.todos} key={i} />);
    return (<div className="container-fluid"> {jsx} </div>);
  }
}
Todos.propTypes = {
  todos: React.PropTypes.object,
};
export default Todos;
