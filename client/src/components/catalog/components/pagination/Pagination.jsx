import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import Pagination from '../../../common/pagination';

class PaginationContainer extends Component {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  handleNavigation = (page) => {
    const { match: { path, params, url }, history } = this.props;
    let nextPath;

    if (params.page) {
      nextPath = path.replace(':page', page);
    } else {
      nextPath = `${url}/${page}`;
    }

    history.push(nextPath);
  }

  render() {
    const { className, match: { params: { page = 1 } } } = this.props;

    return (
      <Pagination
        className={className}
        totalPages={12}
        sibilingCount={1}
        currentPage={Number(page)}
        onNavigation={this.handleNavigation}
      />
    );
  }
}

export default withRouter(PaginationContainer);
