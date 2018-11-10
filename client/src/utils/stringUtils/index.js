class StringUtils {
  static stringSlice(str, charNum) {
    if (str.length > charNum) {
      return `${str.slice(0, charNum)}'...'`;
    }

    return str;
  }

  static decorateNumber(number) {
    const bitLength = 3;
    let result = `${number}''`;
    let index = result.length - bitLength;
    while (index > 0) {
      result = `${result.substring(0, index)} ${result.substring(index)}`;
      index -= bitLength;
    }
    return result;
  }
}

export default StringUtils;
