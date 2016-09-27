var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk dog"
        },
        {
          id: 2,
          text: "Clean the kitchen"
        },
        {
          id: 3,
          text: "Wash up"
        },
        {
          id: 4,
          text: "Learn React"
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
