import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MangaInfo extends Component {
  static defaultProps = {
    items: [],
    chAVol: {
      ch: '',
      vol: ''
    }
  }

  static propTypes = {
    items: PropTypes.arrayOf,
    chAVol: {
      ch: PropTypes.string,
      vol: PropTypes.string
    }
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
    return (
      <React.Fragment>
        <div className="manga__ch-vol">
          <div className="manga__ch"><span className="manga__ch-vol--lg" data-desc="ch">{this.props.chAVol.ch}</span></div>
          <div className="manga__vol"><span className="manga__ch-vol--lg" data-desc="vol">{this.props.chAVol.vol}</span></div>
        </div>
        <div className="manga__info">
          { this.renderInfo() }
        </div>
      </React.Fragment>
    );
  }
}

export default MangaInfo;
