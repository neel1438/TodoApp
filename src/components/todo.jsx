import React ,{ Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className='row'>
              <div className='col-xs-12 center'>{this.props.data.description}</div>
            </div>
        );
    }
}

export default Todo;
