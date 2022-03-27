function solution(N, K) {
  let queue = Array.from({ length: N }, (v, i) => i + 1);
  let cnt = 1;
  while (queue.length !== 1) {
    if (cnt !== K) {
      queue.push(queue.shift());
      cnt++;
    } else {
      queue.shift();
      cnt = 1;
    }
  }

  return queue[0];
}

console.log(solution(8, 3));
