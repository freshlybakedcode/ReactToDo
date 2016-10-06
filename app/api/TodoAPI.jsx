var $ = require('jquery');

module.exports= {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }
    catch (e) {
      //fires if an error inside of try
    }

    //in case the data is contaminated
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;    //Return items with completed=false unless showCompleted is ticked in which case return all
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      if (searchText.length === 0) {
        return true;
      }
      else {
        var str = todo.text.toLowerCase();
        if (str.indexOf(searchText.toLowerCase()) != -1) {
          return true;
        }
      }
    });
    // Sort todos with non-completed first
    filteredTodos.sort((a, b)=> {
      //if (a.completed === false && b.completed === true)
      if (!a.completed && b.completed) {
        return -1;
      }
      else if (a.completed && !b.completed) {
        return 1;
      }
      else {
        return 0;
      }
    });
    return filteredTodos;
  }
};
