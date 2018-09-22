import * as React from 'react';

import IAccordionP from './IAccordionP';

import './style/index.scss';

class Accordion extends React.Component<IAccordionP & React.HTMLAttributes<HTMLDivElement>, { expanded: boolean } > {
  private accordionBody = React.createRef<HTMLDivElement>();
  public state = {
    expanded: this.props.expanded
  };

  public render() {
    const { title } = this.props;
    const { expanded } = this.state;

    const buttonText = expanded ? '-' : '+';

    return (
      <div className={ this.getClassName('accordion') }>
        <div className={ this.getClassName('header') } onClick={ this.handleClick }>
          <div className={ this.getClassName('title') }>
            { title }
          </div>
          <div className={ this.getClassName('button') }> { buttonText } </div>
        </div>
        <div 
          className={ this.getClassName('body') }
          style = { this.bodyStyle() }
          ref={ this.accordionBody }
        >
          <div className={ this.getClassName('body-inner') }>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded
      }
    });
  }

  getClassName(classFor: string) {
    const CAPITAL_CLASS_NAME = 'ClassName';

    let key: string = '';
    let className: string = '';

    if(classFor === 'accordion') {
      const { expanded } = this.state;

      const mainClass = expanded ? 'accordion--expanded' : '';

      className = `accordion ${ mainClass } ${ this.props.className || '' }`;
      return className;
    } 
      
    if(classFor === 'body-inner') {
      className = `accordion__body-inner ${ this.props.bodyInnerClassName || '' }`;
      return className;
    }

    key = classFor + CAPITAL_CLASS_NAME;
    className = `accordion__${ classFor } ${ this.props[key] || '' }`;

    return className;
  }

  bodyStyle() {
    const { accordionBody } = this;
    const { expanded } = this.state;

    const height = expanded ? accordionBody.current.scrollHeight + 'px' : '0';

    return {
      height
    }
  }

  static defaultProps = {
    title: 'Title', 
    expanded: false, 
    className: '',
    headerClassName: '', 
    titleClassName: '',
    bodyClassName: '', 
    bodyInnerClassName: ''
  }
}

export default Accordion;
