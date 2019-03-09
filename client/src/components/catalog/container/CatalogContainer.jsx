import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMedia, getPages, actions as catalogActions } from '../../../redux/modules/catalog';

import withPageLoading from '../../../HOC/withPageLoading';

import { CatalogWithWrapper } from '../view/Catalog';
import filterItems from '../../../constants/catalogFilters';

class CatalogContainer extends Component {
  render() {
    const { media } = this.props;
    return (
      <CatalogWithWrapper
        filterItems={filterItems}
        items={media}
      />
    );
  }
}

function mapStateToProps(state) {
  return ({
    pages: getPages(state),
    media: getMedia(state)
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  const initialPage = ownProps.match.params.page || 1;

  return ({
    load: (page = initialPage, filterOptions) => {
      return dispatch(catalogActions.load({ page, filterOptions }));
    }
  });
}

const CatalogContainerWithpageLoad = withPageLoading(CatalogContainer);

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainerWithpageLoad);
