import React, { PureComponent } from 'react';

function withLoading(Comp) {
  return class WrappedComponent extends PureComponent {
    componentDidMount() {
      const { load } = this.props;

      if (!this.props.status.success) {
        load();
      }
    }

    render() {
      const { load, ...rest } = this.props;

      return (
        <Comp {...rest} />
      );
    }
  };
}

export default withLoading;
