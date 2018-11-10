import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CatalogItem from './catalogItem';
import { Filter, FilterItem } from '../common/filter';
import Sticky from '../common/sticky';

import './style/index.scss';

class Catalog extends PureComponent {
  static defaultProps = {
    filterItems: [],
    items: []
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
    ),
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      source: PropTypes.string,
      social: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        count: PropTypes.number
      }))
    }))
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
    const { items } = this.props;

    return items.map((item, index) => {
      const key = index;

      return (
        <CatalogItem
          title={item.title}
          content={item.content}
          genres={item.genres}
          source={item.source}
          social={item.social}
          key={key}
        />
      );
    });
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
