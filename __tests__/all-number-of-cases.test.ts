import { findAllNumberOfCases } from '../src/all-number-of-cases';

describe('all number of cases test', () => {
  it('[2, 1]', () => {
    let answer = 0;
    const cases = findAllNumberOfCases([2,1]);
    for(let c of cases) {
      let temp = 1;
      for (let num of c) {
        temp *= num;
      }
      answer += temp;
    }
    expect(answer).toBe(5);
  });

  it('[3,2,1]', () => {
    let answer = 0;
    const cases = findAllNumberOfCases([3,2,1]);
    for(let c of cases) {
      let temp = 1;
      for (let num of c) {
        temp *= num;
      }
      answer += temp;
    }
    expect(answer).toBe(23);
  });
});