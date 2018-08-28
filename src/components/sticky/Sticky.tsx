import * as React from 'react';

import './style/index.scss';

class Sticky extends React.Component<{}, {}> {

  public sticky: React.RefObject<HTMLDivElement>;
  
  constructor(props: any) {
    super(props);

    this.sticky = React.createRef(); 
  }

  public componentDidMount() {
    console.log(this);

    document.addEventListener('scroll', this.initSticky);
  }

  public render() {
    return(
      <div className='sticky-content' ref = { this.sticky }>
        { this.props.children }
      </div>
    );
  }

  private initSticky: any = () => {
    console.log(this);
    const stickyElem = this.sticky.current;
    if (window.pageYOffset > this.sticky.current.offsetTop) {
      stickyElem.classList.add("sticky");
    } else {
      stickyElem.classList.remove("sticky");
    }
  }
}

export default Sticky;