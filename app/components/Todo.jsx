var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />&nbsp;
        {text}
      </div>
    )
  }
});

module.exports = Todo;
