import React, { Component } from 'react';
import SimilarMedia from './components/similarMedia';

import './resources/style/index.scss';

class SimilarMediaList extends Component {
  renderList() {
    return this.props.items.map(item => (
      <SimilarMedia key={item.title} {...item} />
    ));
  }

  render() {
    return (
      <div className="similar-media">
        { this.renderList() }
      </div>
    );
  }
}

export default SimilarMediaList;
