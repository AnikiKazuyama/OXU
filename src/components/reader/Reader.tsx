import * as React from 'react';

import Image from '../image';

import StyleUtils from '../../utils/styleUtils';

import './style/index.scss';

class Reader extends React.Component<{},{}> {

    public componentDidMount() {
        StyleUtils.toggleBodyReaderStyle();
    }

    public componentWillUnmount() {
        StyleUtils.toggleBodyReaderStyle();
    }

    public render() {
        return(
            <div className = 'reader'>
                <div className="reader__side reader__side--left">
                    <div className = 'reader__arrow reader__arrow--left'/>
                </div>
                <div className="reader__container">
                    <Image  alt='Хуй да пизда' 
                            src = 'asdasdasssss' 
                            className = 'reader__image'
                            errorClassName = 'reader__image--error'/>
                    <div className="reader__pages"></div>
                </div>

                <div className="reader__side reader__side--right">
                    <div className = 'reader__arrow reader__arrow--right'/>
                </div>
            </div>
        );
    }
}

export default Reader;