import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './resources/style/index.scss';

class Accordion extends Component {
  static defaultProps = {
    title: 'Title',
    expanded: false,
    className: '',
    bodyInnerClassName: '',
    children: null, 
    simple: false
  }

  static propTypes = {
    expanded: PropTypes.bool,
    title: PropTypes.string,
    className: PropTypes.string,
    bodyInnerClassName: PropTypes.string,
    children: PropTypes.node, 
    simple: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.accordionBody = React.createRef();
    this.state = {
      expanded: this.props.expanded
    };
  }

  getClassName(classFor) {
    const CAPITAL_CLASS_NAME = 'ClassName';

    let key = '';
    let className = '';

    if (classFor === 'accordion') {
      const { expanded } = this.state;

      const mainClass = expanded ? 'accordion--expanded' : '';

      className = `accordion ${mainClass} ${this.props.className || ''}`;
      return className;
    }

    if (classFor === 'body-inner') {
      className = `accordion__body-inner ${this.props.bodyInnerClassName || ''}`;
      return className;
    }

    key = classFor + CAPITAL_CLASS_NAME;
    className = `accordion__${classFor} ${this.props[key] || ''}`;

    return className;
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  bodyStyle() {
    const { accordionBody } = this;
    const { expanded } = this.state;

    const height = expanded ? `${accordionBody.current.scrollHeight}px` : '0';

    return {
      height
    };
  }

  render() {
    const { title, simple } = this.props;
    const simpleCalssName = simple ? 'accordion--simple' : '';
    
    return (
      <div className={`${this.getClassName('accordion')} ${simpleCalssName}`}>
        <div className={this.getClassName('header')} onClick={this.handleClick} role="button" tabIndex="0">
          <div className={this.getClassName('title')}>
            { title }
          </div>
          <div className={`${this.getClassName('button')}`} />
        </div>
        <div
          className={this.getClassName('body')}
          style={this.bodyStyle()}
          ref={this.accordionBody}
        >
          <div className={this.getClassName('body-inner')}>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
