import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Button extends PureComponent {
  static defaultProps = {
    as: 'button',
    className: '',
    title: '',
    fullWidth: false,
    children: null,
    onClick: () => null
  }

  static propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    fullWidth: PropTypes.bool,
    children: PropTypes.node, 
    onClick: PropTypes.func
  }

  render() {
    const {
      as,
      className,
      children,
      title,
      fullWidth,
      onClick
    } = this.props;

    const Component = as;
    const fullWidthClassName = fullWidth ? 'button--full-width' : '';

    return (
      <Component
        tabIndex="0"
        className={`button ${fullWidthClassName} ${className}`}
        title={title}
        onClick={onClick}
      >
        { children }
      </Component>
    );
  }
}

class ButtonTag extends PureComponent {
  render() {
    return (<Button className="button--tag" {...this.props} />);
  }
}

class ButtonMangaAction extends PureComponent {
  render() {
    return (<Button className="button--manga-action" {...this.props} />);
  }
}

export default Button;

export {
  Button,
  ButtonTag,
  ButtonMangaAction
};
