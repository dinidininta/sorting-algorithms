
/**
 * Represent a Sorting algorithms collection
 */

export default class Sorting {
  static insertionSort(data) {
    const sortedData = data;
    let i = 1;
    while (i < sortedData.length) {
      const x = sortedData[i];
      let j = i - 1;
      while (j >= 0 && sortedData[j] > x) {
        sortedData[j + 1] = sortedData[j];
        j -= 1;
      }
      sortedData[j + 1] = x;
      i += 1;
    }
    return sortedData;
  }
}
