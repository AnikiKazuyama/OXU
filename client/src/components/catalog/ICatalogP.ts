interface ICatalogP {
    filterItems: Array<{
        title: string,
        fields: Array<{
            name?: string,
            isChecked?: boolean,
            value?: string
        }>
    }>
}

export default ICatalogP;
