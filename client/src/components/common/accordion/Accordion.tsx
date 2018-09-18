import * as React from 'react';

import IAccordionP from './IAccordionP';

import './style/index.scss';

class Accordion extends React.Component<IAccordionP & React.HTMLAttributes<HTMLDivElement>, { expanded: boolean } > {
  private accordionBody = React.createRef<HTMLDivElement>();
  public state = {
    expanded: this.props.expanded
  };

  public componentDidMount() {
    console.log(this.accordionBody.current.offsetHeight);
  }

  public render() {
    const { title } = this.props; 

    return (
      <div className={ this.accordionClassName() }>
        <div className="accordion__header" onClick={ this.handleClick }>
          <div className="accordion__title">
            { title }
          </div>
          <div className="accordion__button"></div>
        </div>
        <div 
          className={ this.bodyClassName() }
          style = { this.bodyStyle() }
          ref={ this.accordionBody }
        >
          <div className="accordion__body-inner">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    console.log(this.state.expanded)
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded
      }
    });
  }

  accordionClassName() {
    const { className } = this.props;

    return `accordion ${ className }`;
  }

  bodyClassName() {
    const { expanded } = this.state;

    return `accordion__body ${ expanded ? 'expanded' : '' }`;
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
    className:''
  }
}

export default Accordion;
