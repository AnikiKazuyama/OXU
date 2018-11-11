import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Input from '../input';

import './style/index.scss';

class InputSearch extends PureComponent {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    return (
      <div className={`input-search ${this.props.className}`}>
        <Input className="input-search__field" />
      </div>
    );
  }
}

export default InputSearch;
