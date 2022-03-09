let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

let isPrime = Array(b + 1).fill(true); // 0부터 b까지 true로 채운 배열 만들기
isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아니다.

function result() {
  // 에라스토텔레스의 체 (2부터 제일 큰 수의 제곱근까지의 배수들을 모두 제거한다. )
  for (let i = 2; i < Math.ceil(Math.sqrt(b)); i++) {
    if (isPrime[i]) {
      let m = 2; //배수를 위해 곱해줄 수
      while (i * m <= b) {
        isPrime[i * m] = false; // i의 배수들은 모두 false (i제외 : m이 2부터 시작이니까)
        m++; // 2*2 -> 2*3 -> 2*4 ... // 3*3 -> ...
      }
    }
  }

  const results = [];
  for (let i = a; i <= b; i++) {
    if (isPrime[i]) {
      results.push(i); // true(소수)인 경우만 담기
    }
  }

  console.log(results.join(`\n`));
}

result();
