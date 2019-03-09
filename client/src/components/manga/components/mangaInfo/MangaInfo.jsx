import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MangaInfo extends Component {
  static defaultProps = {
    items: [],
    chapters: 0,
    volumes: 0
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string

    })),
    chapters: PropTypes.number,
    volumes: PropTypes.number
  }

  renderInfo() {
    return this.props.items.map((item, key) => {
      const index = key;
      return (
        <div className="manga__info-item" key={index}>
          <div className="manga__info-title">{item.title}</div>
          <div className="manga__info-description">{item.description}</div>
        </div>
      );
    });
  }

  render() {
    const { chapters, volumes } = this.props;

    return (
      <React.Fragment>
        <div className="manga__ch-vol">
          <div className="manga__ch"><span className="manga__ch-vol--lg" data-desc="ch">{chapters}</span></div>
          <div className="manga__vol"><span className="manga__ch-vol--lg" data-desc="vol">{volumes}</span></div>
        </div>
        <div className="manga__info">
          { this.renderInfo() }
        </div>
      </React.Fragment>
    );
  }
}

export default MangaInfo;
