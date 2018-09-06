import IImageP from "../../common/image/IImageP";
import { RouteComponentProps } from "react-router";

interface IReaderImageP extends IImageP, RouteComponentProps<any> {
    isVertical: boolean
}

export default IReaderImageP;
