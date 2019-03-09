import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import './resources/style/index.scss';

class ProgressBar extends PureComponent {
  static defaultProps = {
    max: 100,
    current: 0,
    lvl: 1,
    className: ''
  }

  static propTypes = {
    max: PropTypes.number,
    current: PropTypes.number,
    lvl: PropTypes.number,
    className: PropTypes.string
  }

  constructor() {
    super();
    this.maskRef = createRef();
    this.greenLineRef = createRef();
    this.expRef = createRef();
    this.lvlRef = createRef();
    this.textExpRef = createRef();
    this.textLvlRef = createRef();
  }

  componentDidUpdate() {
    this.initEvents();
    this.calcWidht();
  }

  getTextExperience() {
    const { current, max } = this.props;
    return `${current} / ${max}`;
  }

  getTextLevel() {
    const { lvl } = this.props;
    return `Lv: ${lvl}`;
  }

  fitExpText = () => {
    this.fitTextNodeSvg(this.textExpRef.current, this.expRef.current);
  }

  fitLvlText = () => {
    this.fitTextNodeSvg(this.textLvlRef.current, this.lvlRef.current);
  }

  fitTextNodeSvg(textNode, parentSvgElement) {
    const parentBBox = parentSvgElement.getBoundingClientRect();
    const textBBox = textNode.getBoundingClientRect();

    const widthTransform = parentBBox.width / textBBox.width;
    const heightTransform = parentBBox.height / textBBox.height;

    const value = widthTransform < heightTransform ? widthTransform : heightTransform;

    textNode.setAttribute('font-size', `${1 * value - 0.05}em`);
    textNode.setAttribute('dy', `${(1 * value) / 2}px`);
  }

  initEvents() {
    this.fitExpText();
    this.fitLvlText();
  }

  calcWidht() {
    const { max, current } = this.props;

    const greenLine = this.greenLineRef.current;
    const maskRect = this.maskRef.current;

    const greenLineWidth = greenLine.getBBox().width;
    const percentage = current * 100 / max;
    const currentWidht = (greenLineWidth / 100) * percentage;

    maskRect.setAttribute('width', `${currentWidht}px`);
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`${className} progress-bar`}>
        <svg width="100%" height="100%" viewBox="0 0 602 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="progress-bar__mask" x="0" y="0" width="5" height="26">
              <rect ref={this.maskRef} className="progress-bar__rect" x="48" y="7" fill="#fff" width="0" height="26" />
            </mask>
            <mask id="gradient-mask">
              <rect x="0" y="0" width="602" height="602" fill="url(#grad2)" />
            </mask>
            <linearGradient gradientUnits="objectBoundingBox" id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(254,241,2)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(203,190,1)" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="grad2">
              <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="602" height="51" />
          <path mask="url(#gradient-mask)" d="M4 2C4 0.895429 4.89543 0 6 0H29C30.1046 0 31 0.895431 31 2V38.5C31 39.6046 30.1046 40.5 29 40.5H6C4.89543 40.5 4 39.6046 4 38.5V2Z" fill="#6646a2" fillOpacity="0.7" />
          <path mask="url(#gradient-mask)" d="M33 38.5V2C33 0.895431 33.8954 0 35 0H599.5C600.605 0 601.5 0.89543 601.5 2V26.5C601.5 27.6046 600.605 28.5 599.5 28.5H463.5C462.395 28.5 461.5 29.3954 461.5 30.5V38.5C461.5 39.6046 460.605 40.5 459.5 40.5H35C33.8954 40.5 33 39.6046 33 38.5Z" fill="#6646a2" fillOpacity="0.7" />
          <path mask="url(#gradient-mask)" ref={this.expRef} d="M462 48.5V31C462 29.8954 462.895 29 464 29H544.889V50.5H464C462.895 50.5 462 49.6046 462 48.5Z" fill="#6646a2" fillOpacity="0.7" />
          <path mask="url(#gradient-mask)" ref={this.lvlRef} d="M545.295 50.5V29H599.5C600.605 29 601.5 29.8954 601.5 31V48.5C601.5 49.6046 600.605 50.5 599.5 50.5H545.295Z" fill="#6646a2" fillOpacity="0.7" />
          <path className="progress-bar__under-line" d="M48 30.4982V9.00176C48 7.89719 48.8954 7 50 7H584C585.105 7 586 7.89543 586 9V19.5C586 20.6046 585.105 21.5 584 21.5H435L422 32.5H50.0235C48.919 32.5 48 31.6028 48 30.4982Z" fill="#018989" stroke="black" strokeWidth="0.5" />
          <path ref={this.greenLineRef} className="progress-bar__line" d="M48 29.9979V9.00206C48 7.89749 48.8954 7 50 7H584C585.105 7 586 7.89543 586 9V19.2157C586 20.3203 585.105 21.2157 584 21.2157H435L422 32H50.0235C48.919 32 48 31.1025 48 29.9979Z" fill="url(#grad1)" mask="url(#progress-bar__mask)" />
          <rect className="progress-bar__button" x="0.25" y="10.25" width="20.5" height="20.5" rx="1.75" stroke="black" strokeWidth="0.5" onClick={()=> { console.log("Ты че, долбоеб?"); }} />
          <line className="progress-bar__plus" x1="10.5" y1="16" x2="10.5" y2="25" stroke="black" />
          <line className="progress-bar__plus" x1="6" y1="20.5" x2="15" y2="20.5" stroke="black" />
          <text ref={this.textExpRef} alignmentBaseline="central" textAnchor="middle" className="progress-bar__exp-text" fill="white" x="503" y="40">{ this.getTextExperience() }</text>
          <text ref={this.textLvlRef} alignmentBaseline="central" textAnchor="middle" className="progress-bar__lvl-text" x="573.4" y="40" fill="white">{ this.getTextLevel() }</text>
        </svg>
      </div>
    );
  }
}

export default ProgressBar;
