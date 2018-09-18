import * as React from 'react';

import IMnagaActionsP from './IMangaActionsP'
import { ButtonMangaAction as Button } from '../../common/button';

class MangaActions extends React.Component<IMnagaActionsP,{}> {
    public render() {
        return(
            <React.Fragment>
                { this.renderItems() }
            </React.Fragment>
        );
    }

    private renderItems() {
        return this.props.items.map((item, index) => {
            return <Button 
                        as="a"
                        onClick={ () => this.handleClick(item.id) }
                        key={ index } >
                            { item.text }
                    </Button>
        });
    }

    private handleClick(id: string) {
        //TODO
    }
}

export default MangaActions;