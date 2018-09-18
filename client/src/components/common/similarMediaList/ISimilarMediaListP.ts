interface ISimilarMediaListP {
    items: Array<{ 
        title: string, 
        status: string, 
        chapters: string, 
        views: number, 
        img: {
            alt: string, 
            src: string
        }
    }>
}

export default ISimilarMediaListP;
