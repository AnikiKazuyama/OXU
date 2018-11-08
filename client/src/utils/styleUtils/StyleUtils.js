import classes from '../../constants/classNames';

class StyleUtils {
  static toggleBodyReaderStyle() {
    document.body.classList.toggle(classes.read);
  }
}

export default StyleUtils;
