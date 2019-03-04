class AsyncUtil {
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default AsyncUtil;
