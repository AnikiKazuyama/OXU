import Stickyfill from 'stickyfilljs';
import smoothScroll from 'smoothscroll-polyfill';

class Polyfill {
  static initAll() {
    Polyfill.initSticky();
    Polyfill.initSmooth();
  }

  static initSticky() {
    const elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);
  }

  static initSmooth() {
    smoothScroll.polyfill();
  }
}

export default Polyfill;
