import IDropdownP from './IDropdownP';
import IDropdownS from './IDropdownS';

import * as React from 'react';

import './style/index.scss';

class Dropdown extends React.Component<IDropdownP, IDropdownS> implements IDropdown {

  public height = 0;
  public menu: React.RefObject<HTMLDivElement>;
  public toggler: React.RefObject<HTMLDivElement>;

  constructor(props: IDropdownP) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.menu = React.createRef();
    this.toggler = React.createRef();
  }

  public componentDidMount():void {
    this.initEvent();
    this.height = this.calcHeight();
  }

  public componentWillUnmount():void {
    this.removeEvent();
  }

  public render() {
    const isOpen = this.state.isOpen;
    return (
      <div className = 'dropdown'>
        <div className = 'dropdown__toggle' onClick = { this.toggleMenu } ref = { this.toggler }>
          { this.props.children }
        </div>
        <div 
          className = { `dropdown__menu${isOpen ? ' dropdown__menu--active' : ''}` }
          ref = { this.menu } >
          { this.renderMenu() }
          <div className='dropdown__menu_triangle'/>
        </div>  
      </div>
    );
  }

  private renderMenu() {
    const { items } = this.props;

    return items.map((item, key) => {
      return (
        <React.Fragment key = { key }>
          <a className = 'dropdown__item' href = { item.link }>
            { item.name }
          </a>
          { this.renderSeparator(item.isSeparate!) }
        </React.Fragment>
      );
    });
  }

  private renderSeparator(isSeparated: boolean): any {
    if (isSeparated) {
      return(
        <div className='dropdown__item-separator'/>
      )
    }
  }

  private toggleMenu = () => {
    this.setState(( prevState ) => {
      return ({
        isOpen: !prevState.isOpen
      });
    });
  }

  private calcHeight() {
    const menu = this.menu.current!;
  
    let height = 0;
    for (let i = 0; i < menu.childElementCount; i++){
      height += menu.children[i].clientHeight;
    }
    return height;
  }

  private handleOutClick: any = (event: { target: HTMLDivElement; }) => {
    const menu = this.menu.current!;
    const toggler = this.toggler.current!;

    if(!menu.contains(event.target) && 
       !toggler.contains(event.target) && this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  }

  private initEvent() {
    const body = document.body;

    body.addEventListener('click', this.handleOutClick);
  }

  private removeEvent() {
    const body = document.body;

    body.removeEventListener('click', this.handleOutClick);
  }
}

export default Dropdown;