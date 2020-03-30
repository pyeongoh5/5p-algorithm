export function quicksort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }
  
  const pivot = Math.floor(Math.random() * arr.length);
  const less = [];
  const greater = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i !== pivot) {
      if (arr[i] < arr[pivot]) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
  }
  return [...quicksort(less), arr[pivot], ...quicksort(greater)];
}