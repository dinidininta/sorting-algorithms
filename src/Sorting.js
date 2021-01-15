/**
 * Represent a Sorting algorithms collection
 */

export default class Sorting {
  static insertionSort(data) {
    const sortedData = [data[0]];
    data.slice(1).forEach((datum) => {
      let i = data.indexOf(datum);
      sortedData.forEach((temp) => {
        if (temp > datum) {
          i -= 1;
        }
      });
      sortedData.splice(i, 0, datum);
    });
    return sortedData;
  }
}
