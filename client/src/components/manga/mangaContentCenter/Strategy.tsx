import * as React from 'react';

import Chapters from './chapters';
import Reviews from './reviews';

import content from '../../../constants/manga/mangaContentCenter/contentTypes';

const Strategy:{ [name:string]: React.SFC<{ className?: string }> } = {
  [content.Comments]: (props) => {
    return (<div className = { props.className }>Comments</div>)
  }, 
  [content.Chapters]: (props) => {
    return (<Chapters { ...props } />)
  },
  [content.Reviews]: (props) => {
    return (<Reviews { ...props } />)
  }
};

export default Strategy;
