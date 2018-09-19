import * as React from 'react'

import Accordion from '../../../common/accordion';

import './style/index.scss';

import volumesData from './testData';

class Chapters extends React.Component {
  render() {
    return (
      <div className="chapters">
        { this.renderVolumes() }
      </div>
    )
  }

  renderVolumes() {
    let volumes = [];

    for( let key in volumesData ) {
      const volume:any = volumesData[key];

      const title = `${ volume.title } Vol.${ volume.number }`;
      
      volumes.push(
        <Accordion 
          className="chapters__accordion" 
          headerClassName="chapters__accordion-header"
          bodyInnerClassName="chapters__accordion-body-inner"
          title={ title }
          key={ volume.number }
        >
          { this.renderChapters(volume.chapters) }
        </Accordion>
      );
    }

    return volumes;
  }
  //TODO add interface for chapters
  renderChapters(chapters: any):Array<JSX.Element> {
    let chaptersElements = [];

    for( let key in chapters.result ) {
      const chapter = chapters.result[key];
      const title = `${ chapter.number } ${ chapter.title }`;
    
      chaptersElements.push(
        <a 
          className="chapters__item"
          href={ chapter.url } 
          key = { chapter.number }
        >
          { title }
        </a>
      );
    }

    return chaptersElements;
  }

}

export default Chapters;
