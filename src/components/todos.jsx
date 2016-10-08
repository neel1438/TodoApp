import React, { Component } from  'react';
import Todo from './todo';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state={
            todos:[
                {
                    description: "This is example 1",
                    isDone : false,
                },
                {
                    description: "This is example 2",
                    isDone : true,
                },
                {
                    description: "This is example 3",
                    isDone : false,
                },
                {
                    description: "This is example 4",
                    isDone : true,
                }
            ]
        };
    }
    render(){
        let jsx=this.state.todos.map((todo,i) => <Todo data={todo} key={i} />)
        return (<div className='container-fluid'> {jsx} </div> );
    }
}

export default Todos;
