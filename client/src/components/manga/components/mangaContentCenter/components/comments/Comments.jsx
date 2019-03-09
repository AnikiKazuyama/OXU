import React, { Component } from 'react';

import CommentsView from '../../../../../common/comments';

import testData from './testData';

class Comments extends Component {
  componentDidMount() {
    return '';
  }

  render() {
    return (
      <CommentsView comments={testData} />
    );
  }
}

export default Comments;
