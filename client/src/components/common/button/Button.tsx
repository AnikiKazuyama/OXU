import * as React from 'react';
import IButtonP from './IButtonP';

import './style/index.scss';

class Button extends React.Component<IButtonP, {}> {
    public render() {
        const { as, className, children } = this.props;
        const Component = as || 'button';
        return (
            <Component className = { 'button ' + className }>{ children }</Component>
        );
    }
}

class ButtonTag extends React.Component<IButtonP, {}> {
    public render() {
        return (<Button className = { 'button--tag' } { ...this.props } />)
    }
}

export default Button;

export {  
    Button,
    ButtonTag
};