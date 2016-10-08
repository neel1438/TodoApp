import React , {Component} from 'react';
import  Todos from './todos';

class App extends Component{
    submitHandler(e){
        e.preventDefault();
        console.log("lol");
        // this.refs.todoForm.reset();
    }
    render(){
        return (
            <div className="center">
                <form ref="todoForm" onSubmit={this.submitHandler}>
                    <input ref="todo" type="text" placeholder="Enter a todo"/>
                    <input type="submit" value="Submit"/>
                </form>
                <Todos />
            </div>
        )
    }
};

export default App;
