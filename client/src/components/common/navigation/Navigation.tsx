import * as React from 'react';

import INavigationP from './INavigationP';
import INavigationS from './INavigationS';

import './style/index.scss';

class Navigation extends React.Component<INavigationP, INavigationS> {

    constructor(props: INavigationP) {
        super(props);

        this.state = {
            activeId: this.props.items[0].id
        }
    }

    public render() {
        return(
            <nav className="navigation">
                { this.renderNavItems() }
            </nav>
        );
    }

    private renderNavItems() {
        return this.props.items.map((item, index) => {
            const className = `navigation__item ${ item.id == this.state.activeId ? 'navigation__item--active' : ''}`;
            return(
                <a tabIndex={ 0 } className={ className } key={ index } onClick={ (e) => this.handleClick(item.id) } >{ item.text }</a>
            )
        });
    }

    private handleClick(id: string) {
        this.setState({
            activeId: id
        });
        this.props.onClick(id);
    }
}

export default Navigation;