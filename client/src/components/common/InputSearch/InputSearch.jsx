import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        <input className="input-search__field" type="text" />
      </div>
    );
  }
}

export default InputSearch;
