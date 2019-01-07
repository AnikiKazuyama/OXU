import React, { PureComponent } from 'react';

function withLoading(Comp, inlineProps = {}) {
  const { cached = false } = inlineProps;
  return class WrappedComponent extends PureComponent {
    componentDidMount() {
      const { load } = this.props;
      load();
    }

    componentWillReceiveProps(nextProps) {
      const { load, location } = this.props;
      const nextLocation = nextProps.location;

      const isDifferentLocation = location !== nextLocation;
      if (isDifferentLocation && !cached) {
        load();
      }
    }

    render() {
      const { ...rest } = this.props;

      return (
        <Comp {...rest} />
      );
    }
  };
}

export default withLoading;
