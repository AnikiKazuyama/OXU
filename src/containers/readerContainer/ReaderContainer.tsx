import * as React from 'react';

import Reader from '../../components/reader';

import './style/index.scss';

class ReaderContainer extends React.Component<{},{}> {
    public render() {
        return(
            <Reader/>
        );
    }
}

export default ReaderContainer;