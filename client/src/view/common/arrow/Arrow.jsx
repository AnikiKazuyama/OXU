import React from 'react';

function arrow(props) {
  const svgStyle = {
    enableBackground: 'new 0 0 59.414 59.414'
  };

  const polygoneStyle = {
    fill: '#000'
  };

  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 59.414 59.414"
      className={props.className}
      style={svgStyle}
    >
      <g>
        <polygon
          style={polygoneStyle}
          points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
}

export default arrow;
