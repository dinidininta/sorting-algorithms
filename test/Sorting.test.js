import sorting from '../src/Sorting';

describe('Sorting', () => {
  const data = [6, 5, 3, 1, 8, 7, 2, 4];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];
  let actualResult;

  describe('#insertionSort', () => {
    it('should sort values in array using insertion sort', () => {
      actualResult = sorting.insertionSort(data);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
