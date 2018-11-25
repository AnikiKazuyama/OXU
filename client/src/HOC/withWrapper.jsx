import React from 'react';

function witWrapper(Component) {
  return props => (
    <div className="wrapper">
      <Component {...props} />
    </div>
  );
}

export default witWrapper;
