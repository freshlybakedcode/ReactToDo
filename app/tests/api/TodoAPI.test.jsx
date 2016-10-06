var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {                                //Mocha method
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect('TodoAPI').toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });
    it('should not choke on an invalid array', () => {
      var badTodos = {invalidKey: 'Invalid data'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array if data is invalid', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'first text testString',
      completed: true
    },
    {
      id: 2,
      text: 'second text testString',
      completed: false
    },
    {
      id: 3,
      text: 'third text',
      completed: true
    }];

    it('should return all items if `showCompleted` is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    })
    it('should only return items which have not been completed if `showCompleted` is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should move the completed items to the bottom of the list', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'teststring');
      expect(filteredTodos.length).toBe(2);
    })
    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    })
  });

});
