import React, { PureComponent } from 'react';

function withPageLoading(Comp, inlineProps = {}) {
  const { cached = false } = inlineProps;
  return class WrappedComponent extends PureComponent {
    componentDidMount() {
      const { load, match: { params: { page = 1 } } } = this.props;

      load(page);
    }

    componentWillReceiveProps(nextProps) {
      const { load, location } = this.props;
      const { match: { params: { page = 1 } } } = nextProps;

      const nextLocation = nextProps.location;

      const isDifferentLocation = location !== nextLocation;
      if (isDifferentLocation && !cached) {
        load(page);
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

export default withPageLoading;
