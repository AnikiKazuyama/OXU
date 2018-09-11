import * as React from 'react';
import ICardP from './ICardP';

import './style/index.scss';

class Card extends React.Component<ICardP, {}> {
    public render() {
        return(
            <div className = "card">
                { this.renderTitle() }
                { this.props.children }
            </div>
        );
    }

    public renderTitle() {
        const { title } = this.props;

        return title ? this.title() : null;
    }

    public title() {
        const { title } = this.props;

        return (<div className = 'card__title' >{ title }</div>);
    }
}

export default Card;