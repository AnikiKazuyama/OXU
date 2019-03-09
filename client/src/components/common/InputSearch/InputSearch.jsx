import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Input from '../input';

import './resources/style/index.scss';

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
        <Input className="input-search__field" placeholder="Search..." />
      </div>
    );
  }
}

export default InputSearch;
