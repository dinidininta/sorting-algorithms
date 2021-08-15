/**
 * Represent a Sorting algorithms collection
 */

const insertionSort = (data) => {
  const sortedData = [data[0]];
  data.slice(1).forEach((datum, index) => {
    let i = index + 1;
    const reversedData = [...sortedData].reverse();
    reversedData.forEach((temp) => {
      if (temp > datum) {
        i -= 1;
      }
    });
    sortedData.splice(i, 0, datum);
  });
  return sortedData;
};

const selectionSort = (data) => {
  const sortedData = [];
  const copyData = [...data];
  data.forEach(() => {
    const temp = Math.min(...copyData);
    const i = copyData.indexOf(temp);
    sortedData.push(temp);
    copyData.splice(i, 1);
  });
  return sortedData;
};

export default {
  insertionSort,
  selectionSort
};
