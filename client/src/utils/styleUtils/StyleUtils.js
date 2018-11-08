import classes from '../../constants/classNames';

class StyleUtils {

    constructor() {}

    static toggleBodyReaderStyle() {
        document.body.classList.toggle(classes.read);
    }

}

export default StyleUtils;