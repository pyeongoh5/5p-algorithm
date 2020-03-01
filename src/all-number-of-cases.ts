/**
 * 모든 경우의 수를 찾는 알고리즘
 */

/**
 * @param {number} caseNumber 5개의 숫자에서 3개의 숫자를 가지고 만들 수 있는 경우의수를 5P3 이라고 하는데, 이때 3의 해당하는 값
 * @param candidates 경우의 수의 요소 집합
 */
export const findAllNumberOfCases = (array: number[]) => {
  const allCases = [];
  // 1개의 케이스를 찾는 경우에는 그냥 추가하면됨
  for (let i = 0; i < array.length; ++i) {
    allCases.push([array[i]]);
  }
  for(let i = 2; i <= array.length; ++i) {
    allCases.push(...findCaseOfAmount(array, i));
  }
  return allCases;
}

/**
 * 모든 경우의 수를 찾는 함수
 * @param array [1,2,3,4,5] 와 같은 모든 경우의 수를 찾을 때 사용될 수 있는 모든 요소
 * @param caseSize array의 모든 요소에서 몇 개의 요소를 포함하는 경우의 수를 만든 것인지 지칭하는 값
 */
const findCaseOfAmount = (array: number[], caseSize: number) => {
  let cases: number[][] = [];
  for(let i = 0; i <= array.length - caseSize; ++i) {
    let curCase = [];
    let nextIndex = i;
    while(true) {
      if (nextIndex > array.length ) {
        break;
      }
      // 찾으려는 갯수를 다 찾았다면, 케이스 변수에 담고, 현재 케이스에서는 마지막 값을 뺀 뒤 다음 과정으로 간다.
      if (curCase.length === caseSize) {
        cases.push([...curCase]);
        curCase.pop();
      } else {
        // 찾으려는 갯수를 찾지 못했을 때는, 현재 값을 추가하고 다음으로 넘어간다.
        curCase.push(array[nextIndex++]);
      }
    }
  }
  return cases;
}