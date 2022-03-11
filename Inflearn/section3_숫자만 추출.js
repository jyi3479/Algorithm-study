function solution(s) {
  let arr = [];
  let temp = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (parseInt(temp[i]) || parseInt(temp[i]) === 0) {
      arr.push(temp[i]);
    }
  }

  return +arr.join("");
}
