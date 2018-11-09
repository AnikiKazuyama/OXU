import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Filter, FilterItem } from '../common/filter';
import Sticky from '../common/sticky';

import './style/index.scss';

class Catalog extends PureComponent {
  static defaultProps = {
    filterItems: []
  }

  static propTypes = {
    filterItems: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    )
  }

  constructor() {
    super();
    this.filtercount = 40;
  }

  renderFilterItems() {
    const { filterItems } = this.props;
    return filterItems.map(filterItem => (
      <FilterItem
        title={filterItem.title}
        fields={filterItem.fields}
        key={filterItem.title}
      />
    ));
  }

  renderCatalogList() {
    const elems = [];

    for (let i = 0; i < this.filtercount; i++) {
      const key = i;

      elems.push(
        <div key={key}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur
          sunt quam distinctio expedita nulla, itaque, minima dolores aliquid ipsa
          harum nemo magni animi quod dolore sint porro ea labore?
        </div>
      );
    }

    return elems;
  }

  render() {
    return (
      <div className="catalog">
        <Sticky offsetBottom={20} offsetTop={76}>
          <Filter>
            { this.renderFilterItems() }
          </Filter>
        </Sticky>

        <div className="catalog__list">
          { this.renderCatalogList() }
        </div>
      </div>
    );
  }
}

class CatalogWithWrapper extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Catalog {...this.props} />
      </div>
    );
  }
}

export default Catalog;
export {
  CatalogWithWrapper,
  Catalog
};
