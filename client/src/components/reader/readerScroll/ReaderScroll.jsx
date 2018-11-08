import * as React from 'react';

import PerfectScrollbar from 'perfect-scrollbar';

import './style/index.scss';

class ReaderScroll extends React.Component {

    constructor(props) {
        super(props);

        this.scrollbar = React.createRef();
        this.scroll;
    }

    componentDidMount() {
        document.addEventListener('wheel', this.onWheel);
        this.scroll = new PerfectScrollbar(this.scrollbar.current, {
            handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch']
        });
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.onWheel);
    }

    componentDidUpdate() {
        this.scroll.update();
        this.scrollbar.current.scrollTop = 0;
    }

    render() {
        return ( 
            <div className = 'scrollbar' ref = { this.scrollbar } { ...this.props }>
                { this.props.children }
            </div>
        );
    }

    onWheel = (e) => {
        this.scrollbar.current.scrollBy({
            top: -e.wheelDelta
        });
    }
}

export default ReaderScroll;