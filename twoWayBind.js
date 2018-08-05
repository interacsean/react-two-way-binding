const React = require('React');

function bindTwoWay(Component, stateKey = null, stateOwner = null) {
  const caller = stateOwner || this;
  return class BoundComponent extends React.Component {
    constructor(props) {
      super();
      this.stateKey = stateKey || props.stateKey || "myInput";
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
      caller.setState({
        [this.stateKey]: e.target.value
      });
      typeof this.props.onChange === 'function' &&
        this.props.onChange(e.target.value);
    }

    render() {
      const { stateKey, onChange, ...restProps } = this.props;
      return (
        <Component
          onChange={this.handleOnChange}
          value={caller.state[this.stateKey]}
          {...restProps}
        />
      );
    }
  };
}

module.exports = bindTwoWay;
