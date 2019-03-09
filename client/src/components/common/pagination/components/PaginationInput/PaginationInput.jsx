import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from '../../../input';

class PaginationInput extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    isError: PropTypes.bool,
    message: PropTypes.string
  };

  static defaultProps = {
    onSubmit: () => null,
    isError: false,
    message: 'Go to page'
  };

  constructor() {
    super();
    this.enteredPage = 0;
    this.pageInput = createRef();
  }

  getClassName() {
    const { isError } = this.props;
    const requireClassName = 'pagination__tapper';

    return classnames(
      requireClassName,
      { [`${requireClassName}--error`]: isError }
    );
  }

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const page = this.enteredPage;

    if (page) {
      onSubmit(this.enteredPage);
      this.enteredPage = 0;
      this.pageInput.current.clear();
    }
  }

  handleChange = (value) => {
    this.enteredPage = Number(value);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className={this.getClassName()}>
        <div
          className="pagination__tapper-submit"
          role="link"
          tabIndex="0"
          onClick={this.handleSubmit}
        >
          { message }
        </div>
        <div className="pagination__tapper-box">
          <Input
            className="pagination__input"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            ref={this.pageInput}
          />
        </div>
      </div>
    );
  }
}

export default PaginationInput;
