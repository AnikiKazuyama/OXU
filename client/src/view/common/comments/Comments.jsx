import React, { Component, createRef } from 'react';
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

    this.commentRefs = { };
    this.placeholder = 'Cast your spell...';
    this.state = {
      replyCommentId: -1
    };
  }

  setReplyCommentId(id) {
    this.setState({
      replyCommentId: id
    });
  }

  handleReplyClick = (id) => {
    const element = this.commentRefs[id].current;
    const bodyRect = document.body.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    const offset = rect.top - bodyRect.top;
    window.scrollTo({
      behavior: 'smooth',
      top: offset - window.innerHeight / 2
    });
    this.setReplyCommentId(id);
  }

  renderComments() {
    const { comments } = this.props;
    return comments.map((comment) => {
      const { replyCommentId } = this.state;
      this.commentRefs[comment.id] = createRef();
      const className = replyCommentId === comment.id ? 'comments__item--replied' : '';
      return (
        <CommentsItem
          className={className}
          onReplyClick={this.handleReplyClick}
          refItem={this.commentRefs[comment.id]}
          {...comment}
        />
      );
    });
  }

  render() {
    return (
      <div className="comments">
        <div className="comments__inner">
          { this.renderComments() }
        </div>
        <CommentsSender placeholder={this.placeholder} />
      </div>
    );
  }
}

export default Comments;
