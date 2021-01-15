/* eslint-disable no-param-reassign */
/**
 * Represent a Sorting algorithms collection
 */

export default class Sorting {
  static insertionSort(data) {
    const sortedData = data;
    let i = 1;
    data.slice(1).forEach((datum) => {
      let j = i - 1;
      while (j >= 0 && data[j] > datum) {
        sortedData[j + 1] = data[j];
        j -= 1;
      }
      sortedData[j + 1] = datum;
      i += 1;
    });
    return sortedData;
  }
}
