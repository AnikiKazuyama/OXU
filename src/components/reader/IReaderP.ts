import { RouteComponentProps } from "react-router";

interface IReaderP extends RouteComponentProps<any> {
    title: string,
    volume: number,
    number: number,
    src: string,
    pageCount: number, 
    onImageClick(page:number, pageCount:number): void, 
    prevPage: number, 
    nextPage: number, 
    isVertical: boolean
}

export default IReaderP;