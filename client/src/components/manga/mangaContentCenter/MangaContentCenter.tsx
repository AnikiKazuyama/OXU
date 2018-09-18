import * as React from 'react';

import Card from '../../common/card';

import navItems from '../../../constants/mangaPageNavigation';
import ContentStrategy from './Strategy';
import Navigation from '../../common/navigation';

class MangaContentCenter extends React.Component<{},{activeContent: string}> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            activeContent: navItems[0].id
        };
    }
    public render() {
        const SubComponent = this.renderSubComponent();

        return(
            <div className="manga__content-center">
                <Card>
                    <Navigation
                        items={ navItems } 
                        onNavigation={ this.handleClick } 
                    />
                </Card>
                <Card>
                    <div className="manga__main">
                        <SubComponent />
                    </div>
                </Card>
            </div>
        );
    }

    private handleClick = (id: string) => {
        this.setState({
            activeContent: id
        });
    }

    private renderSubComponent = () => {
        const { activeContent } = this.state;
        
        return ContentStrategy[activeContent];
    }
}

export default MangaContentCenter;