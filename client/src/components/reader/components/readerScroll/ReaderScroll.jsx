import React, { Component } from 'react';

import PerfectScrollbar from 'perfect-scrollbar';

import './resources/style/index.scss';

class ReaderScroll extends Component {
  constructor(props) {
    super(props);

    this.scrollbar = React.createRef();
    this.scroll = null;
  }

  componentDidMount() {
    document.addEventListener('wheel', this.onWheel);
    this.scroll = new PerfectScrollbar(this.scrollbar.current, {
      handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch']
    });
  }

  componentDidUpdate() {
    this.scroll.update();
    this.scrollbar.current.scrollTop = 0;
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.onWheel);
  }

  onWheel = (e) => {
    this.scrollbar.current.scrollBy({
      top: -e.wheelDelta
    });
  }

  render() {
    return (
      <div className="scrollbar" ref={this.scrollbar} {...this.props}>
        { this.props.children }
      </div>
    );
  }
}

export default ReaderScroll;
