const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let line = input();
let x1, y1, r1, x2, y2, r2;

while (line) {
  // console.log(input());
  let temp = input().split(" ");
  x1 = +temp[0];
  y1 = +temp[1];
  r1 = +temp[2];
  x2 = +temp[3];
  y2 = +temp[4];
  r2 = +temp[5];

  let dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  if (dist === 0) {
    // 두 원의 중심이 같을 때 (dist === 0)
    if (r1 !== r2) {
      //1) 반지름이 같지 않을 때 : 점점 0개
      console.log(0);
    } else if (r1 === r2) {
      // 2) 반지름이 같을 때 : 점점 무한대
      console.log(-1);
    }
  } else if (dist < r1 + r2) {
    // 두 원의 중심거리가 두 반지름의 합보다 작을 때
    if (dist + r1 < r2 || dist + r2 < r1) {
      // 원 안에 다른 원이 있지만 접하지 않음 : 접점 0개
      console.log(0);
    } else if (dist + r1 === r2 || dist + r2 === r1) {
      // 내접하는 경우 : 접점 1개
      console.log(1);
    } else {
      // 두 점에서 만나는 경우 :  접점 2개
      console.log(2);
    }
  } else if (dist === r1 + r2) {
    // 외접하는 경우
    console.log(1);
  } else if (dist > r1 + r2) {
    // 두 원이 서로 포함되지 않으면서 떨어져 있는 경우 : 접점 0개
    console.log(0);
  }
  line--;
}
