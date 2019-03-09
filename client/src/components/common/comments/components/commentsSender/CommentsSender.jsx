import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentEditable from '../../../contentEditable';
import Button from '../../../button';

class CommentsSender extends Component {
  static defaultProps = {
    onSend: () => {},
    placeholder: ''
  }

  static propTypes = {
    onSend: PropTypes.func,
    placeholder: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.text = '';
  }

  handleChange = (text) => {
    this.text = text;
  }

  send = () => {
    const { onSend } = this.props;
    const { text } = this;

    onSend(text);
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div className="comments__sender">
        <ContentEditable
          className="comments__input"
          placeholder={placeholder}
          onChange={this.handleChange}
        />
        <Button className="comments__button" onClick={this.send} />
      </div>
    );
  }
}

export default CommentsSender;
