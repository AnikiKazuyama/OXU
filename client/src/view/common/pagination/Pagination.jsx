import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaginationButton from './PageButton';
import PaginationInput from './PaginationInput';
import PageNext from './PageNext';
import PagePrev from './PagePrev';

import Divider from '../divider';

import './style/index.scss';

class Pagination extends Component {
  static defaultProps = {
    onNavigation: () => null,
    sibilingCount: 1,
    totalPages: 5,
    currentPage: 1,
    isError: false,
    className: '',
    showEllipsis: true
  }

  static propTypes = {
    onNavigation: PropTypes.func,
    sibilingCount: PropTypes.number,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isError: PropTypes.bool,
    className: PropTypes.string,
    showEllipsis: PropTypes.bool
  }

  componentDidMount() {
    console.log('i`m mmounted');
  }

  spreadButton = () => (
    <PaginationButton page="..." />
  )

  handleNavigation = (pageToGo) => {
    const { currentPage, onNavigation } = this.props;

    if (currentPage !== pageToGo) {
      onNavigation(pageToGo);
    }
  }

  createElipsis = () => (
    <PaginationButton
      page="..."
    />
  );

  createPage = (page) => {
    const { currentPage } = this.props;

    return (
      <PaginationButton
        isActive={page === currentPage}
        page={page}
        onClick={this.handleNavigation}
      />
    );
  }

  createInnerPrefix = (firstGroupEnd, innerGroupStart) => {
    const prefixPage = innerGroupStart - 1;
    const showEllipsis = prefixPage !== (firstGroupEnd + 1);
    const prefixFactory = showEllipsis ? this.createElipsis : this.createPage;

    return prefixFactory(prefixPage);
  }

  createInnerSuffix = (innerGroupEnd, lastGroupStart) => {
    const suffixPage = innerGroupEnd + 1;
    const showEllipsis = suffixPage !== (lastGroupStart - 1);
    const suffixFactory = showEllipsis ? this.createElipsis : this.createPage;

    return suffixFactory(suffixPage);
  }

  createNext() {
    const { currentPage, totalPages } = this.props;
    const isInRange = currentPage + 1 <= totalPages;
    const onClick = isInRange ? this.handleNavigation : () => null;

    return (
      <PageNext
        onClick={onClick}
        currentPage={currentPage}
      />
    );
  }

  createPrev() {
    const { currentPage } = this.props;
    const isInRange = currentPage - 1 >= 1;
    const onClick = isInRange ? this.handleNavigation : () => null;

    return (
      <PagePrev
        onClick={onClick}
        currentPage={currentPage}
      />
    );
  }

  range(start, end) {
    const range = [];

    for (let i = start; i <= end; i++) {
      range.push(this.createPage(i));
    }

    return range;
  }

  buttons() {
    const {
      sibilingCount,
      totalPages,
      currentPage,
      showEllipsis
    } = this.props;

    const elipsisSize = showEllipsis ? 1 : 0;

    const firstGroupEnd = 1;
    const firstGroup = this.range(1, firstGroupEnd);

    const lastGroupStart = totalPages;
    const lastGroup = this.range(lastGroupStart, totalPages);

    const innerGroupStart = Math.min(
      Math.max(currentPage - sibilingCount, firstGroupEnd + elipsisSize + 1),
      lastGroupStart - elipsisSize - 2 * sibilingCount - 1
    );

    const innerGroupEnd = innerGroupStart + 2 * sibilingCount;
    const innerGroup = this.range(innerGroupStart, innerGroupEnd);

    return ([
      this.createPrev(),
      ...firstGroup,
      showEllipsis && this.createInnerPrefix(firstGroupEnd, innerGroupStart),
      ...innerGroup,
      showEllipsis && this.createInnerPrefix(innerGroupEnd, lastGroupStart),
      ...lastGroup,
      this.createNext()
    ]);
  }

  render() {
    const { className, isError } = this.props;

    return (
      <div className={`pagination ${className}`}>
        <div className="pagination__btn-list">
          { this.buttons() }
        </div>
        <Divider vertical />
        <PaginationInput
          onSubmit={this.handleNavigation}
          isError={isError}
        />
      </div>
    );
  }
}

export default Pagination;
