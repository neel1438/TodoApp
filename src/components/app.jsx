import React, { Component } from 'react';
import Todos from './todos';

const Horizon = require('@horizon/client');
const horizon = new Horizon({ secure: false });
const todos = horizon('todos');

class App extends Component {
  componentDidMount() {
    todos.watch().subscribe((todosData) => this.setState({
      nextId: todosData.length + 1,
    }));
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.todoInput.value) {
      todos.store({ id: this.state.nextId, isDone: false, description: this.todoInput.value });
      this.todoForm.reset();
    } else {
      console.log('no input');
    }
  }
  render() {
    return (
      <div className="center">
        <form ref={(ref) => { this.todoForm = ref; }} onSubmit={this.submitHandler}>
          <input type="text" ref={(ref) => { this.todoInput = ref; }} placeholder="Enter a todo" />
          <input type="submit" value="Submit" />
        </form>
        <Todos todos={todos} />
      </div>
   );
  }
}

export default App;
