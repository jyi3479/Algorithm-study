function solution(board, moves) {
  let length = board.length;
  let arr = new Array(length).fill([]);
  let bucket = [];
  let result = 0;
  // 위치마다 담겨져 있는 인형의 종류를 새로운 배열에 담는다.(0 제외)
  for (let i = 0; i < board.length; i++) {
    arr[i] = board.map((l) => l[i]).filter((l) => l !== 0);
  }

  // 크레인 작동 위치-1 를 arr의 인덱스로 하며 반복문을 실행
  // 각 위치에 인형이 있으면 가장 앞에 있는 인형을 빼서 bucket 배열의 앞에 넣는다.
  // bucket 원소 중 앞에 2개가 똑같으면 result에 2를 더하고, 두 원소를 bucket에서 제거한다.
  moves.forEach((index) => {
    if (arr[index - 1].length) {
      bucket.unshift(arr[index - 1].shift());

      if (bucket[0] === bucket[1]) {
        result += 2;
        bucket.splice(0, 2);
      }
    }
  });

  return result;
}
