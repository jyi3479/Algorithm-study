function merge(leftA, rightA) {
  let results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }

  let leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  // 남은 항목들을 결과 배열에 추가한다.
  return results.concat(leftRemains).concat(rightRemains);
}

// 병합하면서 배열의 항목들을 비교
function mergeSort(array) {
  if (array.length < 2) {
    // 요소가 하나뿐이라서 해당 배열은 이미 정렬된 것이다.
    return array;
  }

  let midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([6, 1, 23, 4, 2, 3]));
