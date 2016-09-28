var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call "onNewTodo" if valid todo item entered', () => {
    var todoText = "water plants";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.task.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should NOT call "onNewTodo" if an item with no length is entered', () => {
    var todoText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.task.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
