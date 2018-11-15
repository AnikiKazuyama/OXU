import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';

class CommentsItem extends Component {
  static defaultProps = {
    className: '',
    id: -1,
    username: '',
    avatarSource: '',
    date: '',
    reply: {
      id: -1,
      username: ''
    },
    comment: '',
    onReplyClick: () => {},
    refItem: () => {}
  };

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string,
    avatarSource: PropTypes.string,
    date: PropTypes.string,
    reply: PropTypes.shape({
      id: PropTypes.number,
      string: PropTypes.string
    }),
    comment: PropTypes.string,
    onReplyClick: PropTypes.func,
    refItem: PropTypes.func
  };

  handleReplyClick = () => {
    const { onReplyClick, reply } = this.props;

    onReplyClick(reply.id);
  }

  renderReply() {
    const { reply } = this.props;
    const replyComp = (
      <a onClick={this.handleReplyClick} className="comments__reply-to" role="button" tabIndex="0">{ reply.username }</a>
    );

    return reply.id === -1 ? null : replyComp;
  }

  render() {
    const {
      id,
      username,
      avatarSource,
      date,
      reply,
      comment,
      refItem,
      className
    } = this.props;
    return (
      <div ref={refItem} id={`comment-${id}`} className={`comments__item ${className}`}>
        <div className="comments__avatar">
          <a href="" className="comments__avatar-image">
            <img src={avatarSource} alt={reply.username} />
          </a>
        </div>
        <div className="comments__content">
          <div className="comments__content-header">
            <div className="comments__username">
              <span>{ username }</span>
            </div>
            <div className="comments__common">
              { this.renderReply() }
              <Button className="comments__report" title="Report comment" />
            </div>
          </div>
          <div className="comments__content-main">
            <span className="comments__text">{ comment }</span>
          </div>
          <div className="comments__content-footer">
            <div className="comments__date">{ date }</div>
            <Button className="comments__response">Response</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsItem;
