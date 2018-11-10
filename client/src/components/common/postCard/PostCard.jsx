import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './style/index.scss';

class PostCard extends Component {
  static defaultProps = {
    title: '',
    description: '',
    authorName: '',
    reviews: '',
    avatarUrl: '',
    className: ''
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    authorName: PropTypes.string,
    reviews: PropTypes.string,
    avatarUrl: PropTypes.string,
    className: PropTypes.string
  }

  getAvatarStyle() {
    const { avatarUrl } = this.props;

    return ({
      backgroundImage: `url(${avatarUrl})`
    });
  }

  render() {
    const {
      title,
      description,
      authorName,
      reviews,
      className
    } = this.props;

    return (
      <div className={`post-card ${className}`}>
        <h3 className="post-card__title">
          <a href="" className="post-card__link">
            { title }
          </a>
        </h3>
        <div className="post-card__description">{ description }</div>
        <div className="post-card__bottom">
          <div className="post-card__author">
            <div className="post-card__author-avatar" style={this.getAvatarStyle()} />
            <div className="post-card__author-info">
              <div className="post-card__name">
                <a href="" className="post-card__name-title">{ authorName }</a>
                <span className="post-card__name-description">name</span>
              </div>
              <div className="post-card__reviews">
                <span className="post-card__reviews-title">{ reviews }</span>
                <span className="post-card__reviews-description">reviews</span>
              </div>
            </div>
          </div>
          <Button as="a" className="post-card__read-button">Read</Button>
        </div>
      </div>
    );
  }
}

export default PostCard;
