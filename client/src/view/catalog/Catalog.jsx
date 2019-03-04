import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CatalogItem from './catalogItem';
import { Filter, FilterItem } from '../common/filter';
import Pagination from '../../containers/PaginationContainer';

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
      preview: PropTypes.string,
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
      if (item) {
        return (
          <CatalogItem
            id={item.id}
            title={item.title}
            content={item.content}
            genres={item.genres}
            preview={item.preview}
            social={item.social}
            key={key}
          />
        );
      }

      return null;
    });
  }

  render() {
    if (this.props.items.length) {
      return (
        <div className="catalog">
          <div className="catalog__filter-container">
            <Filter className="sticky">
              { this.renderFilterItems() }
            </Filter>
          </div>

          <div className="catalog__list">
            { this.renderCatalogList() }
          </div>
        </div>
      );
    }

    return null;
  }
}

class CatalogWithWrapper extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Catalog {...this.props} />
        <Pagination className="catalog__pagination" />
      </div>
    );
  }
}

export default Catalog;
export {
  CatalogWithWrapper,
  Catalog
};
