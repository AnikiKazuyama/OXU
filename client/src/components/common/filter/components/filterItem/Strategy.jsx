import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../../slider';

const FilterListItem = props => (
  <li className="filter__list-item">
    { props.name }
  </li>
);

FilterListItem.propTypes = {
  name: PropTypes.string
};

FilterListItem.defaultProps = {
  name: ''
};

class FilterFactory {
  constructor() {
    this.types = {
      slider: 'slider',
      checkbox: 'checkbox'
    };
  }

  get(type) {
    if (Object.prototype.hasOwnProperty.call(this.types, type)) {
      if (type === this.types.slider) {
        return props => (
          <Slider {...props.result} />
        );
      }

      if (type === this.types.checkbox) {
        return FilterListItem;
      }
    }

    return () => null;
  }
}

export default new FilterFactory();
