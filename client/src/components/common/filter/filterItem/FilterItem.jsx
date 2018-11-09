import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterFactory from './Strategy';

class FilterItem extends Component {
  static defaultProps = {
    title: 'Title',
    fields: []
  }

  static propTypes = {
    title: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        result: PropTypes.shape({
          isChecked: PropTypes.bool
        }),
        name: PropTypes.string,
        value: PropTypes.string
      })
    )
  }

  renderFields() {
    const { fields } = this.props;

    return fields.map((oneField) => {
      const Item = FilterFactory.get(oneField.type);

      return (<Item name={oneField.name} key={oneField.name} />);
    });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="filter__item">
        <h3 className="filter__title">
          { title }
        </h3>
        <ul className="filter__list">
          { this.renderFields() }
        </ul>
      </div>
    );
  }
}

export default FilterItem;
