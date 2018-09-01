import * as React from 'react';

import PerfectScrollbar from 'perfect-scrollbar';

import './style/index.scss';

class ReaderScroll extends React.Component<{},{}> {

    private scrollbar: React.RefObject<HTMLDivElement> = React.createRef();
    private scroll: PerfectScrollbar;

    public componentDidMount() {
        this.scroll = new PerfectScrollbar(this.scrollbar.current);
    }

    public componentDidUpdate() {
        this.scroll.update();
        this.scrollbar.current.scrollTop = 0;
    }

    public render() {
        return ( 
            <div className = 'scrollbar' ref = { this.scrollbar } { ...this.props }>
                { this.props.children }
            </div>
        );
    }
}

export default ReaderScroll;