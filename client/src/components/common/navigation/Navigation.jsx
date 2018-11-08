import * as React from 'react';

import './style/index.scss';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeId: this.props.items[0].id
        }
    }

    render() {
        return(
            <nav className="navigation">
                { this.renderNavItems() }
            </nav>
        );
    }

    renderNavItems() {
        return this.props.items.map((item, index) => {
            const className = `navigation__item ${ item.id == this.state.activeId ? 'navigation__item--active' : ''}`;
            return(
                <a tabIndex={ 0 } className={ className } key={ index } onClick={ (e) => this.handleClick(item.id) } >{ item.text }</a>
            )
        });
    }

    handleClick(id) {
        this.setState({
            activeId: id
        });
        
        this.props.onNavigation(id);
    }
}

export default Navigation;