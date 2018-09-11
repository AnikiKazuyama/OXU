interface IReaderContainerS {
    isLoaded: boolean
    chapter: {
        title?: string,
        volume?: number,
        number?: number,
        entry?: string[]
    }
}

export default IReaderContainerS;