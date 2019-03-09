import React, { Component } from 'react';

import Accordion from '../../../../../common/accordion';

import volumesData from './testData';
import './resources/style/index.scss';

class Chapters extends Component {
  renderVolumes() {
    const volumes = [];
    Object.keys(volumesData).forEach((key) => {
      const volume = volumesData[key];
      const title = `Vol. ${volume.number} «${volume.title}»`;

      volumes.push(
        <Accordion
          className="chapters__accordion"
          headerClassName="chapters__accordion-header"
          bodyInnerClassName="chapters__accordion-body-inner"
          title={title}
          key={volume.number}
        >
          { this.renderChapters(volume.chapters) }
        </Accordion>
      );
    });

    return volumes;
  }

  renderChapters(chapters) {
    const chaptersElements = [];

    Object.keys(chapters.result).forEach((key) => {
      const chapter = chapters.result[key];
      const title = `Ch. ${chapter.number} ${chapter.title}`;

      chaptersElements.push(
        <a
          className="chapters__item"
          href={chapter.url}
          key={chapter.number}
        >
          { title }
          <span className="chapters__date">
            { chapter.date }
          </span>
        </a>
      );
    });

    return chaptersElements;
  }

  render() {
    return (
      <div className="chapters">
        { this.renderVolumes() }
      </div>
    );
  }
}

export default Chapters;
