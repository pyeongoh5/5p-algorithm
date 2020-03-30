import { quicksort } from '../src/quicksort';

describe('quicksort test', () => {
  it('[1, 3, 2]', () => {
    expect(quicksort([1, 3, 2])).toEqual([1,2,3]);
  });

  it('[1, 3, 3, 2]', () => {
    expect(quicksort([1, 3, 3, 2])).toEqual([1,2,3,3]);
  });

  it('[5, 1, 3, 2, 1, 5, 2, 7]', () => {
    expect(quicksort([5, 1, 3, 2, 1, 5, 2, 7])).toEqual([1, 1, 2, 2, 3, 5, 5, 7]);
  })
});