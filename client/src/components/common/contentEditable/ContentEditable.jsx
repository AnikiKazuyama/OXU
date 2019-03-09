import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import './resources/style/index.scss';

class ContentEditable extends Component {
  static defaultProps = {
    className: '',
    placeholder: '',
    defaultValue: '',
    onChange: () => {}
  }

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.input = createRef();
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.input.current.innerHTML = this.props.defaultValue;
      this.setState({
        text: this.props.defaultValue
      });
    }
    this.input.current.addEventListener('paste', this.onPaste);
  }

  onPaste(e) {
    e.preventDefault();
    const text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  }

  handleChange = (event) => {
    const { target: { innerText } } = event;
    const { onChange } = this.props;
    this.setState({
      text: innerText
    }, () => onChange(this.state.text));
  }

  render() {
    const {
      className,
      placeholder
    } = this.props;
    const { text } = this.state;
    const inputClassName = `input ${className} ${text ? 'input--hidden' : ''}`;
    return (
      <div
        className={inputClassName}
        type="text"
        placeholder={placeholder}
        onInput={this.handleChange}
        ref={this.input}
        contentEditable
      />
    );
  }
}

export default ContentEditable;
