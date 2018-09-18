class StringUtils {
    public static stringSlice(str: string, charNum: number): string {
        if (str.length > charNum)
            return str.slice(0, charNum) + '...';
        else 
            return str;
    }

    public static decorateNumber(number: number) {
        const bitLength = 3;
        let result = number + '';
        let index = result.length - bitLength;
        while (index > 0) {
            result = result.substring(0, index) + ' ' + result.substring(index);
            index -= bitLength;
        }
        return result;
    }
}

export default StringUtils;
