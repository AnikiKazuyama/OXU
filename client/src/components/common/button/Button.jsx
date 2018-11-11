import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Button extends PureComponent {
  static defaultProps = {
    as: 'button',
    className: '',
    title: '',
    children: null
  }

  static propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const { as, className, children, title } = this.props;
    const Component = as;

    return (
      <Component tabIndex="0" className={`button ${className}`} title={title}>
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
