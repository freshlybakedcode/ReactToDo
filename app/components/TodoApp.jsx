var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
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
  handleAddTodo: function(text) {
    alert('Booya. New todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onNewTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
