import sorting from '../src/Sorting';

describe('Sorting', () => {
  const data = [6, 5, 3, 9, 7, 3, 8, 2, 1, 4, 2];
  const expectedResult = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];
  let actualResult;

  describe('#insertionSort', () => {
    it('should sort values in array using insertion sort', () => {
      actualResult = sorting.insertionSort(data);

      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#selectionSort', () => {
    it('should sort values in array using selection sort', () => {
      actualResult = sorting.selectionSort(data);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
