import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';

function CommentsItem(props) {
  const {
    id,
    username,
    avatarSource,
    date,
    reply,
    comment
  } = props;

  function renderReply() {
    const replyComp = (
      <a className="comments__reply-to">{ reply.username }</a>
    );

    return reply.id === -1 ? null : replyComp;
  }

  return (
    <div id={`comment-${id}`} className="comments__item">
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
            { renderReply() }
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

CommentsItem.defaultProps = {
  id: -1,
  username: '',
  avatarSource: '',
  date: '',
  reply: {
    id: -1,
    username: ''
  },
  comment: ''
};

CommentsItem.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  avatarSource: PropTypes.string,
  date: PropTypes.string,
  reply: PropTypes.shape({
    id: PropTypes.number,
    string: PropTypes.string
  }),
  comment: PropTypes.string
};

export default CommentsItem;
