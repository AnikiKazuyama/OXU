import React, { Component } from 'react';

import Comments from '../../components/common/comments';

import testData from './testData';

class CommentsContainer extends Component {
  componentDidMount() {
    return '';
  }

  render() {
    return (
      <Comments comments={testData} />
    );
  }
}

export default CommentsContainer;
