function solution(s) {
  var answer = s;
  let numArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numArray.length; i++) {
    answer = answer.replace(numArray[i], i);
    if (answer.includes(numArray[i])) {
      answer = answer.replace(numArray[i], i);
    }
  }

  return +answer;
}
