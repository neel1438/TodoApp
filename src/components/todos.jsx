import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.todos = props.todos;
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this.todos.watch().subscribe(
      (todos) => {
        console.log(todos);
        this.setState({ todos });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    const jsx = this.state.todos.map((todo, i) => <Todo data={todo} key={i} />);
    return (<div className="container-fluid"> {jsx} </div>);
  }
}
Todos.propTypes = {
  todos: React.propTypes.arrayOf(React.propTypes.object),
};
export default Todos;
