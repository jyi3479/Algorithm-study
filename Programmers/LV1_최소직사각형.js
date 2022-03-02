function solution(sizes) {
  let min_arr = [];
  let max_arr = [];

  sizes.map((l, idx) => {
    min_arr.push(Math.min(l[0], l[1]));
    max_arr.push(Math.max(l[0], l[1]));
    return min_arr, max_arr;
  });

  return Math.max(...min_arr) * Math.max(...max_arr);
}
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
