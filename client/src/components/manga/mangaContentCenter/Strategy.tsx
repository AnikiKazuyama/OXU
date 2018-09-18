import * as React from 'react';

import Chapters from './chapters';

import content from '../../../constants/manga/mangaContentCenter/contentTypes';

const Strategy:{ [name:string]: React.SFC<{ className?: string }> } = {
  [content.Comments]: (props) => {
    return (<div className = { props.className }>Comments</div>)
  }, 
  [content.Chapters]: (props) => {
    return (<Chapters { ...props } />)
  },
  [content.Reviews]: (props) => {
    return (<div className = { props.className }>Reviews</div>)
  }
};

export default Strategy;
