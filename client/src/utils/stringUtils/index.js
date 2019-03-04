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
      result = `${result.substring(index, 0)} ${result.substring(index)}`;
      index -= bitLength;
    }
    return result;
  }

  static firstToUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default StringUtils;
