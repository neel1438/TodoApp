import React, { Component } from 'react';
import Todos from './todos';

const Horizon = require('@horizon/client');
const horizon = new Horizon({ secure: false });
const todos = horizon('todos');

class App extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.todoInput.value) {
      todos.store({ isDone: false, description: this.todoInput.value });
      this.todoForm.reset();
    }
  }
  render() {
    return (
      <div className="container" >
        <form ref={(ref) => { this.todoForm = ref; }} onSubmit={this.submitHandler} className="form-inline">
          <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input className="form-control" ref={(ref) => { this.todoInput = ref; }} id="exampleInputEmail1" type="text" placeholder="Enter a todo" />
          </div>
          <input type="submit" value="Submit" className="btn btn-info" />
        </form>
        <Todos todos={todos} />
      </div>
   );
  }
}

export default App;
