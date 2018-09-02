import * as React from 'react';

import PerfectScrollbar from 'perfect-scrollbar';

import './style/index.scss';

class ReaderScroll extends React.Component<{},{}> {

    private scrollbar: React.RefObject<HTMLDivElement> = React.createRef();
    private scroll: PerfectScrollbar;

    public componentDidMount() {
        document.addEventListener('wheel', this.onWheel);
        this.scroll = new PerfectScrollbar(this.scrollbar.current, {
            handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch']
        });
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.onWheel);
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

    private onWheel = (e: WheelEvent) => {
        this.scrollbar.current.scrollBy({
            top: -e.wheelDelta
        });
    }
}

export default ReaderScroll;