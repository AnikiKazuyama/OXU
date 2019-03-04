import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/button';

import withAddToFavorite
  from '../../../containers/profileContainer/ContentCenterContainer/HOC/withAddBookmark';

const AddToFavoriteBtn = withAddToFavorite (Button, 'favorite');

class MangaActions extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf (
      PropTypes.shape ({
        id: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  };

  renderSimpleButton({id, text}) {
    return (
      <Button fullWidth key={id}>
        {text}
      </Button>
    );
  }

  renderWrapButton({id, text}) {
    const mangaId = this.props.id;

    return (
      <AddToFavoriteBtn fullWidth key={id} id={mangaId}>
        {text}
      </AddToFavoriteBtn>
    );
  }

  renderItems () {
    return this.props.items.map (item => {
      if (item.id === 'addToFavorite') {
        return this.renderWrapButton (item);
      }

      return this.renderSimpleButton (item);
    });
  }

  render () {
    return (
      <React.Fragment>
        {this.renderItems ()}
      </React.Fragment>
    );
  }
}

export default MangaActions;
