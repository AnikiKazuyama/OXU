import * as React from 'react';

import { ButtonMangaAction as Button } from '../../common/button';

class MangaActions extends React.Component {
    render() {
        return(
            <React.Fragment>
                { this.renderItems() }
            </React.Fragment>
        );
    }

    renderItems() {
        return this.props.items.map((item, index) => {
            return <Button 
                        as="a"
                        onClick={ () => this.handleClick(item.id) }
                        key={ index } >
                            { item.text }
                    </Button>
        });
    }

    handleClick(id) {
        //TODO
    }
}

export default MangaActions;