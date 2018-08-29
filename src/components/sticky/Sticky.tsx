import * as React from 'react';

import IStickyP from './IStickyP';

import './style/index.scss';

class Sticky extends React.Component<IStickyP, {}> {

  public sticky: React.RefObject<HTMLDivElement>;
  public currentScrollPos: number;
  public stickedTop: boolean;
  public stickedBottom: boolean;
  
  constructor(props: IStickyP) {
    super(props);

    this.stickedTop = false;
    this.stickedBottom = false;
    this.sticky = React.createRef(); 
  }

  public componentDidMount() {
    this.currentScrollPos = window.pageYOffset;
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
    const container = this.sticky.current;
    if (window.innerHeight > container.firstElementChild.clientHeight) {
      if (window.pageYOffset > container.clientTop) {
          container.classList.add('sticky');
          container.style.top = this.props.offsetBottom + 'px';
      } else {
          container.classList.remove('sticky');
          container.style.top = '';
      }
    } else {
      const margin = container.style.marginTop ? parseInt(container.style.marginTop.replace('px', '')) : 0;
      if (this.currentScrollPos - window.pageYOffset < 0) {
          if (!this.stickedTop && !this.stickedBottom && 
            window.pageYOffset + window.innerHeight - this.props.offsetTop - this.props.offsetBottom 
            > margin + container.firstElementChild.clientHeight) {
              console.log('Устанавливаем нижний стик');
              container.classList.add('sticky');
              container.style.bottom = this.props.offsetBottom + 'px';
              container.style.top = '';
              container.style.marginTop = '';
              this.stickedBottom = true;
          } else if (this.stickedTop) {
              console.log('Отменяем верхний стик');
              container.style.marginTop = window.pageYOffset + container.offsetTop - this.props.offsetTop + 'px';
              container.classList.remove('sticky');
              container.style.top = '';
              this.stickedTop = false;
          }
      } else {
          if (this.stickedBottom) {
              console.log('Отменяем нижний стик');
              container.style.marginTop = window.pageYOffset + container.offsetTop - this.props.offsetTop + 'px';
              container.classList.remove('sticky');
              container.style.bottom = '';
              this.stickedBottom = false;
          } else if (!this.stickedBottom && !this.stickedTop && window.pageYOffset < margin) {
              console.log('Устанавливаем верхний стик');
              container.classList.add('sticky');
              container.style.top = this.props.offsetTop +'px';
              container.style.bottom = '';
              container.style.marginTop = '';
              this.stickedTop = true;
          } else if (window.pageYOffset == margin) {
              console.log('Отменяем верхний стик');
              container.classList.remove('sticky');
              container.style.top = '';
              this.stickedTop = false;
          }
        }
      }
    this.currentScrollPos = window.pageYOffset;
  }

  // static defaultProps = { 
  //   offsetBottom: 0,
  //   offsetTop: 0
  //  }
}

export default Sticky;