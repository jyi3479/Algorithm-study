const solution = (arr) => {
  let answer = [];
  let cnt = 0;
  let temp = [];
  arr.forEach((x) => {
    // 시작: 2, 끝: 1
    temp.push([x[0], 2]);
    temp.push([x[1], 1]);
  });
  temp.sort((a, b) => {
    if (a[0] === b[0]) {
      // 끝이 먼저 와야함
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < temp.length; i++) {
    if (temp[i][1] === 1) {
      cnt--;
    } else {
      cnt++;
    }
    answer.push(cnt);
  }

  return Math.max(...answer);
};

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

// 인프런 답
function solution2(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr2 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution2(arr2));
