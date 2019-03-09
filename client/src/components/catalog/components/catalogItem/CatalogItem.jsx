import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Counter from '../../../common/counter';
import Card from '../../../common/card';
import Image from '../../../common/image';
import Clamp from '../../../common/clamp';

import CommentsIcon from '../../../../assets/img/social/commentsIcon.svg';
import LikesIcon from '../../../../assets/img/social/likesIcon.svg';
import ViewsIcon from '../../../../assets/img/social/viewsIcon.svg';

class CatalogItem extends Component {
  getIcon(icon) {
    switch (icon) {
      case ('comments'):
        return CommentsIcon;
      case ('likes'):
        return LikesIcon;
      case ('views'):
        return ViewsIcon;
      default:
        return '';
    }
  }

  renderFooter() {
    const { social } = this.props;

    return social.map((item, index) => {
      const key = index;
      return <Counter className="catalog-item__social" icon={this.getIcon(item.icon)} count={item.count} key={key} />;
    });
  }

  renderGenres() {
    const { genres } = this.props;

    return genres.join(', ');
  }

  render() {
    const {
      id,
      title,
      content,
      preview
    } = this.props;

    const a = title ? title : 'иди нахуй';

    return (
      <Card className="catalog-item" shadow>
        <Link to={`/manga/${id}`} className="catalog-item__preview">
          <Image src={preview} />
          <span className="catalog-item__title">{ title }</span>
        </Link>
        <div className="catalog-item__content">
          <div className="catalog-item__header">{ this.renderGenres() }</div>
          <div className="catalog-item__main" ref={this.content}>
            <Clamp>{ content }</Clamp>
          </div>
          <div className="catalog-item__footer">{ this.renderFooter() }</div>
        </div>
      </Card>
    );
  }
}

CatalogItem.defaultProps = {
  title: 'Title',
  content: 'Content',
  genres: [],
  preview: '',
  social: []
};

CatalogItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  preview: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    count: PropTypes.number
  }))
};

export default CatalogItem;
