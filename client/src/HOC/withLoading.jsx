import React, { Component } from 'react';

function withLoading(Comp, where) {
  return class WrappedComponent extends Component {
    componentDidMount() {
      const { load } = this.props;

      if (!this.props[where].success) {
        load();
      }
    }

    render() {
      return (
        <Comp {...this.props} />
      );
    }
  };
}

export default withLoading;
