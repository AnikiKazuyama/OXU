import classes from '../../constants/classNames';

class StyleUtils {

    private constructor() {}

    public static toggleBodyReaderStyle():void {
        document.body.classList.toggle(classes.read);
    }

}

export default StyleUtils;