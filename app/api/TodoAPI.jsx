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
  }
};
