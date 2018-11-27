import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/button';

class MangaActions extends Component {
  // handleClick(id) {
  //   //TODO
  // }
  static defaultProps = {
    items: []
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }))
  }

  renderItems() {
    return this.props.items.map(item => (
      <Button
        fullWidth
        onClick={() => this.handleClick(item.id)}
        key={item.id}
      >
        { item.text }
      </Button>
    ));
  }

  render() {
    return (
      <React.Fragment>
        { this.renderItems() }
      </React.Fragment>
    );
  }
}

export default MangaActions;
