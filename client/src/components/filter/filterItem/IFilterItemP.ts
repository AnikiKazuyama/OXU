interface IFilterItemP {
    title: string, 
    fields: Array<{
        name?: string,
        isChecked?: boolean,
        value?: string
    }>
}

export default IFilterItemP;
