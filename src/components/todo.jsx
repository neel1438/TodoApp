import React, { Component } from 'react';

class Todo extends Component {
  onChangeHandler() {
    console.log('toggled');
  }
  classes() {
    if (!this.props.data.isDone) {
      return 'col-xs-11 strike';
    }
    return 'col-xs-11';
  }
  render() {
    return (
      <div className="row center">
        <div className="col-xs-1">
          <input ref={(ref) => { this.toggleDone = ref; }} onChange={this.onChangeHandler} type="checkbox" checked={this.props.data.isDone} />
        </div>
        <div className={this.classes}>
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
};
export default Todo;
