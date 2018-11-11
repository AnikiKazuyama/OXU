import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsItem from './commentsItem';
import CommentsSender from './commentsSender';

import './style/index.scss';

class Comments extends Component {
  static defaultProps = {
    comments: []
  }

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatarSource: PropTypes.string,
      date: PropTypes.string,
      reply: PropTypes.number,
      comment: PropTypes.string
    }))
  }

  constructor(props) {
    super(props);

    this.placeholder = 'Cast your spell...';
  }

  renderComments() {
    const { comments } = this.props;

    return comments.map(comment => (
      <CommentsItem {...comment} />
    ));
  }

  render() {
    return (
      <div className="comments">
        <div className="comments__inner">
          { this.renderComments() }
        </div>
        <CommentsSender />
      </div>
    );
  }
}

export default Comments;
