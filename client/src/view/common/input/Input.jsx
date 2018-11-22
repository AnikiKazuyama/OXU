import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static defaultProps = {
    className: '',
    placeholder: '',
    propValue: '',
    onChange: () => {},
    spellCheck: false
  }

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    propValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
    spellCheck: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    const { propValue, onChange } = this.props;

    this.setState({
      text: propValue || value
    }, () => onChange(this.state.text));
  }

  render() {
    const {
      className,
      placeholder,
      spellCheck
    } = this.props;
    const { text } = this.state;

    return (
      <input
        className={className}
        type="text"
        placeholder={placeholder}
        onChange={this.handleChange}
        value={text}
        spellCheck={spellCheck}
      />
    );
  }
}

export default Input;