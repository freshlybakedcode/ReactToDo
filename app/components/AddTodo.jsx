var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var task = this.refs.task.value;
    if (task.length > 0) {
      this.refs.task.value = '';
      this.props.onNewTodo(task);
    }
    else {
      this.refs.task.focus();     //Put cursor back in box
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="task" placeholder="What you gotta do?" />
          <button className="button expanded">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
